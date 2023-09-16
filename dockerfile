FROM node:18
RUN apt update -y && apt upgrade -y
COPY . ./app
WORKDIR /app
RUN git pull config development
RUN npm install
EXPOSE 3000
CMD ["/bin/bash"]