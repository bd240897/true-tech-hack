import json

from fastapi import FastAPI, Request, Response, Header, UploadFile, File
from fastapi.responses import StreamingResponse
from pathlib import Path
from fastapi.openapi.docs import (
    get_swagger_ui_html,
    get_swagger_ui_oauth2_redirect_html,
)
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from io import BytesIO

# app = FastAPI(docs_url=None, redoc_url=None)
app = FastAPI()
app.mount("/static", StaticFiles(directory="static"), name="static")

# @app.get("/docs", include_in_schema=False)
# async def custom_swagger_ui_html():
#     return get_swagger_ui_html(
#         openapi_url=app.openapi_url,
#         title=app.title + " - Swagger UI",
#         oauth2_redirect_url=app.swagger_ui_oauth2_redirect_url,
#         swagger_js_url="/static/swagger-ui-bundle.js",
#         swagger_css_url="/static/swagger-ui.css",
#     )

# @app.get(app.swagger_ui_oauth2_redirect_url, include_in_schema=False)
# async def swagger_ui_redirect():
#     return get_swagger_ui_oauth2_redirect_html()

templates = Jinja2Templates(directory="templates")
CHUNK_SIZE = 1024 * 1024
video_path = Path("static/video.mp4")


@app.get("/")
async def read_root(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})


# @app.get("/video")
# async def video_endpoint(range: str = Header(None)):
#     start, end = range.replace("bytes=", "").split("-")
#     start = int(start)
#     end = int(end) if end else start + CHUNK_SIZE
#     with open(video_path, 'rb') as video:
#         video.seek(start)
#         data = video.read(end-start)
#         filesize = str(video_path.stat().st_size)
#         headers = {
#             'Content-Range': f'bytes {str(start)}-{str(end)}/{filesize}',
#             'Accept-Ranges': 'bytes'
#
#         }
#         return StreamingResponse(BytesIO(data), status_code=206, headers=headers, media_type="multipart/x-mixed-replace;boundary=frame")


# @app.get("/video")
# async def video_endpoint():
#     def iterfile():
#         with open(video_path, mode="rb") as file_like:
#             yield from file_like
#
#     return StreamingResponse(iterfile(), media_type="video/mp4")


import os
from typing import BinaryIO

from fastapi import HTTPException, Request, status
from fastapi.responses import StreamingResponse


def send_bytes_range_requests(
        file_obj: BinaryIO, start: int, end: int, chunk_size: int = 10_000
):
    """Send a file in chunks using Range Requests specification RFC7233

    `start` and `end` parameters are inclusive due to specification
    """
    with file_obj as f:
        f.seek(start)
        while (pos := f.tell()) <= end:
            read_size = min(chunk_size, end + 1 - pos)
            yield f.read(read_size)


def _get_range_header(range_header: str, file_size: int):
    def _invalid_range():
        return HTTPException(
            status.HTTP_416_REQUESTED_RANGE_NOT_SATISFIABLE,
            detail=f"Invalid request range (Range:{range_header!r})",
        )

    try:
        h = range_header.replace("bytes=", "").split("-")
        start = int(h[0]) if h[0] != "" else 0
        end = int(h[1]) if h[1] != "" else file_size - 1
    except ValueError:
        raise _invalid_range()

    if start > end or start < 0 or end > file_size - 1:
        raise _invalid_range()
    return start, end


def range_requests_response(
        request: Request, file_path: str, content_type: str
):
    """Returns StreamingResponse using Range Requests of a given file"""

    file_size = os.stat(file_path).st_size
    range_header = request.headers.get("range")

    headers = {
        "content-type": content_type,
        "accept-ranges": "bytes",
        "content-encoding": "identity",
        "content-length": str(file_size),
        "access-control-expose-headers": (
            "content-type, accept-ranges, content-length, "
            "content-range, content-encoding"
        ),
    }
    start = 0
    end = file_size - 1
    status_code = status.HTTP_200_OK

    if range_header is not None:
        start, end = _get_range_header(range_header, file_size)
        size = end - start + 1
        headers["content-length"] = str(size)
        headers["content-range"] = f"bytes {start}-{end}/{file_size}"
        status_code = status.HTTP_206_PARTIAL_CONTENT

    return StreamingResponse(
        send_bytes_range_requests(open(file_path, mode="rb"), start, end),
        headers=headers,
        status_code=status_code,
    )


@app.get("/video")
def get_video(request: Request):
    return range_requests_response(
        request, file_path=str(video_path), content_type="video/mp4"
    )


timings_of_movie_moments = [
    {
        "id": 1,
        "type": "blur-filter",
        "on": 2,
        "off": 5,
    },
    {
        "id": 2,
        "type": "blur-filter",
        "on": 7,
        "off": 10,
    },
    {
        "id": 3,
        "type": "something",
        "on": 12,
        "off": 18,
    },
]


# Отдача готового json
@app.get('/get_moments')
def get_json():
    return timings_of_movie_moments

# Отдача готового json, но из файла
@app.post('/')
def get_json(json_file: UploadFile):
    with open(json_file.filename, 'r') as f:
        data = json.load(f)
    return data
