FROM node:20.11.0-slim

RUN mkdir -p /lionelpinheiroduarte-portfolio
WORKDIR /lionelpinheiroduarte-portfolio

COPY . /lionelpinheiroduarte-portfolio/
RUN npm install

EXPOSE 8080

CMD [ "npx", "@11ty/eleventy", "--serve", "--port=8080" ]