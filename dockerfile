FROM node:18
RUN apt update -y && apt upgrade -y
COPY . ./app
WORKDIR /app
EXPOSE 3000
CMD ['/bin/bash']