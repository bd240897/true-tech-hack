
* не забыть указывать url backend in .env

**Dockerfile**
    
Простой докер-файл, для запуска через http-server. Есть проблема с router, history: createWebHistory().
При принудительной перезагрузке страницы приложение падает.
Ибо ему нужно раздавать index.html.

Решение 

https://dev.to/nas5w/how-to-serve-a-vue-app-with-nginx-in-docker-4p54

https://cli.vuejs.org/ru/guide/deployment.html#docker-nginx

**nginx.Dockerfile**

Докер-файл, для запуска vue через nginx. (взято из документации)
Приложение больше не падает.

Заметки

Заглушки для картинок 
    http://dummyimage.com/400


dev env 
VUE_APP_API_URL=http://91.185.84.82:3004
VUE_APP_VIDEO_URL=http://91.185.84.82:8001/video 
dev env API