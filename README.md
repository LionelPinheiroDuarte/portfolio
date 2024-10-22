## Getting start

### Prerequisites
- [Git](https://git-scm.com/)
- [Node](https://nodejs.org/en)

### Installation
```
git clone https://github.com/LionelPinheiroDuarte/portfolio.git
cd portfolio
npm install
npx @11ty/eleventy --serve
```

For those who don't to download thing, you can use docker.
```
git clone https://github.com/LionelPinheiroDuarte/portfolio.git
cd portfolio
docker build -t lionelpinheiroduarte-portfolio .
docker run -p 8080:8080 lionelpinheiroduarte-portfolio
```
