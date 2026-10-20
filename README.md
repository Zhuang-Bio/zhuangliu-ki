# Zhuang Liu — academic profile

A minimal static website featuring education and publications. No dependencies or build step.

## Local development

```sh
cd /workspace/personalweb
python3 -m http.server 8001 --bind 0.0.0.0
```

Edit `index.html` for education, `assets/site.js` for publications, and `assets/style.css` for styling. Publication details are based on the supplied CV; Google Scholar links provide access to the latest list.

GitHub Pages deployment is defined in `.github/workflows/pages.yml`.
