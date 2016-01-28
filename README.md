# Hyperloop UPV

Para bajaros la web con git, hace falta:

```bash
git clone git@github.com:hyperloopupv/hyperloopupv.github.io.git && cd ./hyperloopupv
```

Para modificar la web, instalar npm y ejecutar:

```bash
npm install
grunt watch
```

Esto instalará todas las dependencias y esperará a que cambiéis cosas para compilar los archivos nuevos. Una vez hayáis hecho algún cambio podéis verlo abriendo `index.html` (que se habrá generado automáticamente).

Para subir los cambios, hacer esto (tenéis que estar autorizados en Github, por ahora sólo German):

```bash
git add .
git commit -m "New changes"
git push origin master
```

Github se está usando como hosting, así que una vez hayáis hecho lo anterior, unos minutos después ya estarán los cambio en vivo