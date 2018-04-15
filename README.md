# Compsme

A little util to generate many components boilerplate files on the fly

## In /.compsmerc

```
{
    "dumb": "src/components",
    "smart": "src/containers",
}
```

## Then

`compsme new button form* header footer app*`

Create the following folder structure in src folder

```
├── components  
│ ├── Button  
│   ├── index.js  
│   ├── test.js  
│ ├── Header  
│   ├── ...
│ └── Footer  
├── containers  
│ ├── Form  
│   ├── ...
│ ├── App
```
