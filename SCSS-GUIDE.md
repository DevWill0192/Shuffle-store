# SCSS Setup Guide

## Estructura de archivos SCSS

```
src/
├── styles.scss              # Archivo principal SCSS
├── _variables.scss          # Variables globales
├── _mixins.scss            # Mixins reutilizables
├── components/
│   └── _buttons.scss       # Estilos de botones
├── layout/
│   └── _header.scss        # Estilos del header
└── pages/
    └── _home.scss          # Estilos de la página home
```

## Cómo usar SCSS

### 1. Variables
Las variables se definen en `_variables.scss` y se pueden usar en cualquier archivo SCSS:

```scss
// En _variables.scss
$primary-color: #ff6b6b;
$font-size-base: 16px;

// En cualquier archivo SCSS
.my-element {
  color: $primary-color;
  font-size: $font-size-base;
}
```

### 2. Mixins
Los mixins se definen en `_mixins.scss` y se pueden reutilizar:

```scss
// En _mixins.scss
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

// En cualquier archivo SCSS
.my-container {
  @include flex-center;
}
```

### 3. Anidamiento
SCSS permite anidar selectores:

```scss
.header {
  background: white;
  
  &__logo {
    font-size: 24px;
  }
  
  &__nav {
    ul {
      list-style: none;
    }
  }
}
```

### 4. Importar archivos
Para importar otros archivos SCSS, usa `@import`:

```scss
@import 'variables';
@import 'mixins';
@import 'components/buttons';
```

## Comandos disponibles

```bash
# Iniciar el servidor de desarrollo
npm start

# Compilar SCSS (modo watch)
npm run build
```

## Características habilitadas

- ✅ Source maps para debugging
- ✅ Variables SCSS
- ✅ Mixins reutilizables
- ✅ Anidamiento de selectores
- ✅ Importación de archivos
- ✅ Compilación automática con webpack
- ✅ Modo watch para desarrollo

## Estructura recomendada

1. **Variables**: Define colores, fuentes, espaciados, etc.
2. **Mixins**: Crea funciones reutilizables
3. **Components**: Estilos de componentes específicos
4. **Layout**: Estilos de estructura (header, footer, etc.)
5. **Pages**: Estilos específicos de páginas
