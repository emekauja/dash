# Boilerplate and Starter for Next JS 12+, Tailwind CSS 3 and TypeScript [![Twitter](https://img.shields.io/twitter/url/https/twitter.com/cloudposse.svg?style=social&label=Follow%20%40Ixartz)](https://twitter.com/ujadninth)

<p align="center">
  <a href="https://creativedesignsguru.com/demo/Nextjs-Boilerplate/"><img src="public/assets/images/startrek.png?raw=true" alt="Next js star-trek app example"></a>
</p>

🚀 Star Trek Api Project and built with  Next.js, Tailwind CSS and TypeScript ⚡️.
s

- Node.js 14+ and npm

### Getting started

Run the following command on your local environment:

```
git clone --depth=1 https://github.com/emekauja/startrek.git
cd startrek
npm install
```

Then, you can run locally in development mode with live reload:

```
npm run dev
```

Open http://localhost:3000 with your favorite browser to see your project.

```
.
├── README.md                # README file
├── next.config.js           # Next JS configuration
├── public                   # Public folder
│   └── assets
│       └── images           # Image used by default template
├── src
│   ├── assets               # Atomic layout components
│ 	├── components
│ 	│ 		├── controls 				# Controlled components
│ 	│ 		├── forms						# form inputs components
│ 	│ 		└── primitive				# Uncontrolled components
│   ├── pages                # Next JS pages
│   ├── styles               # PostCSS style folder with Tailwind
│   ├── templates            # Default template
│   └── utils                # Utility folder
├── tailwind.config.js       # Tailwind CSS configuration
└── tsconfig.json            # TypeScript configuration
```

### Customization

You can easily configure Next js Boilerplate. Please change the following file:

- `public/apple-touch-icon.png`, `public/favicon.ico`, `public/favicon-16x16.png` and `public/favicon-32x32.png`: your website favicon, you can generate from https://favicon.io/favicon-converter/
- `src/styles/global.css`: your CSS file using Tailwind CSS
- `src/utils/AppConfig.ts`: configuration file
- `src/templates/Main.tsx`: default theme

### Deploy to production

You can see the results locally in production mode with:

```
$ npm run build
$ npm run start
```

The generated HTML and CSS files are minified (built-in feature from Next js). It will also removed unused CSS from [Tailwind CSS](https://tailwindcss.com).

You can create an optimized production build with:

```
npm run build-prod
```

Now, your blog is ready to be deployed. All generated files are located at `out` folder, which you can deploy with any hosting service.


### Contributions

Everyone is welcome to contribute to this project. Feel free to open an issue if you have question or found a bug.

### License

Licensed under the MIT License, Copyright © 2022

See [LICENSE](LICENSE) for more information.

---
