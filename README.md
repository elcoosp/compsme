# Compsme

A little util to generate many components boilerplate files on the fly

##/.compsmerc

```
{
    "dumb": "src/components",
    "smart": "src/containers",
}
```

`compsme new button form* header footer app*`

Create the following folder structure in src folder

```
├── components  
│ ├── Button  
│   ├── index.js  
│   ├── test.js  
│ ├── Header  
│ └── Footer  
├── containers  
│ ├── Form  
│ ├── App
```
