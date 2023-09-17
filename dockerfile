FROM node:18
RUN apt-get update -y && apt-get upgrade -y
WORKDIR /app
COPY . .
RUN git clone https://github.com/moeeztariq125/Video-Conferencing-App.git
RUN git checkout development
RUN git pull config development
RUN npm install
EXPOSE 3000
CMD ["/bin/bash"]