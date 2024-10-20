FROM node:20.11.0

WORKDIR /lionelpinheiroduarte-portfolio

COPY package*.json ./
COPY .eleventy.js ./

RUN npm install

EXPOSE 8500

CMD ["npx", "@11ty/eleventy", "--serve", "--port=8500", "--input=src"]