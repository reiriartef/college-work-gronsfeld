# 🔐 Simulador de Cifrado Gronsfeld

## 📋 Descripción del Proyecto

Esta aplicación web implementa una simulación completa del **Método de Encriptación de Gronsfeld**, desarrollada como parte de una tarea de **Seguridad Informática**. El cifrado Gronsfeld es una variante del cifrado de Vigenère que utiliza una clave numérica en lugar de una clave alfabética, proporcionando una capa adicional de seguridad en la comunicación de datos.

### 🎯 Objetivos

- Implementar el algoritmo de cifrado y descifrado Gronsfeld
- Proporcionar una interfaz de usuario intuitiva y educativa
- Demostrar conceptos fundamentales de criptografía clásica
- Facilitar el aprendizaje del método de encriptación por desplazamiento

## 🛠️ Tecnologías Utilizadas

- **React 19.1.0** - Biblioteca de JavaScript para interfaces de usuario
- **TypeScript 5.8.3** - Lenguaje de programación tipado
- **Vite 6.3.5** - Herramienta de construcción rápida
- **Tailwind CSS 4.1.10** - Framework de CSS utilitario
- **ESLint** - Linter para mantener calidad de código

## 🔍 Funcionamiento del Cifrado Gronsfeld

El cifrado Gronsfeld funciona mediante los siguientes principios:

### Proceso de Cifrado:

1. Se toma cada letra del texto original
2. Se convierte a su posición en el alfabeto (A=0, B=1, C=2, ...)
3. Se suma el dígito correspondiente de la clave numérica
4. Se aplica módulo 26 para mantener el resultado dentro del alfabeto
5. Se convierte de vuelta a letra

### Proceso de Descifrado:

1. Se toma cada letra del texto cifrado
2. Se convierte a su posición en el alfabeto
3. Se resta el dígito correspondiente de la clave numérica
4. Se aplica módulo 26 (con ajuste para valores negativos)
5. Se convierte de vuelta a letra

### Ejemplo Práctico:

```
Texto Original: "HOLA"
Clave Numérica: "123"
Proceso:
- H (7) + 1 = 8 → I
- O (14) + 2 = 16 → Q
- L (11) + 3 = 14 → O
- A (0) + 1 = 1 → B
Resultado: "IQOB"
```

## 🖥️ Características de la Aplicación

### Interfaz de Entrada:

- **Campo de texto** para la frase a ser codificada
- **Campo numérico** para la clave de cifrado (solo acepta números)
- **Validación en tiempo real** de la clave numérica

### Interfaz de Salida:

- **Visualización** de la frase sin codificar
- **Mostrar** la clave de cifrado utilizada
- **Resultado** de la frase codificada
- **Función de descifrado** para verificar el proceso

### Funcionalidades Adicionales:

- ✅ Cifrado y descifrado en tiempo real
- ✅ Validación de entrada (solo números en la clave)
- ✅ Preservación de espacios y caracteres especiales
- ✅ Interfaz responsiva y moderna
- ✅ Información educativa sobre el algoritmo
- ✅ Botones para limpiar todos los campos

## 🚀 Instalación y Uso

### Prerrequisitos:

- Node.js 18+ instalado
- npm o yarn como gestor de paquetes

### Pasos de instalación:

1. **Clonar el repositorio:**

```bash
git clone <url-del-repositorio>
cd gronsfeld
```

2. **Instalar dependencias:**

```bash
npm install
```

3. **Ejecutar en modo desarrollo:**

```bash
npm run dev
```

4. **Abrir en el navegador:**

```
http://localhost:5173
```

### Comandos disponibles:

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Construcción para producción
npm run preview  # Vista previa de la construcción
npm run lint     # Verificación de código con ESLint
```

## 📁 Estructura del Proyecto

```
gronsfeld/
├── src/
│   ├── components/
│   │   └── gronsfeld.tsx      # Componente principal del cifrado
│   ├── assets/                # Recursos estáticos
│   ├── index.css             # Estilos globales
│   ├── main.tsx              # Punto de entrada de la aplicación
│   └── vite-env.d.ts         # Definiciones de tipos para Vite
├── public/
│   └── vite.svg              # Icono de la aplicación
├── package.json              # Configuración del proyecto
├── tsconfig.json             # Configuración de TypeScript
├── vite.config.ts            # Configuración de Vite
└── README.md                 # Documentación del proyecto
```

## 🔒 Consideraciones de Seguridad

### Fortalezas del Cifrado Gronsfeld:

- ✅ Más seguro que el cifrado César simple
- ✅ Resistente al análisis de frecuencia básico
- ✅ Fácil de implementar y entender

### Limitaciones:

- ⚠️ Vulnerable al análisis de Kasiski
- ⚠️ No es seguro para aplicaciones modernas críticas
- ⚠️ Clave numérica puede ser más predecible

### Recomendaciones:

- 📝 Usar claves numéricas largas y aleatorias
- 📝 Combinar con otros métodos para mayor seguridad
- 📝 Solo para fines educativos y demostrativos

## 👨‍🎓 Contexto Académico

Este proyecto fue desarrollado como parte del curso de **Seguridad Informática** con los siguientes objetivos de aprendizaje:

- Comprender los fundamentos de la criptografía clásica
- Implementar algoritmos de cifrado por sustitución
- Analizar vulnerabilidades en sistemas criptográficos históricos
- Desarrollar habilidades en programación de aplicaciones de seguridad

## 📊 Casos de Uso Educativos

1. **Demostración de conceptos criptográficos básicos**
2. **Análisis de fortalezas y debilidades de cifrados clásicos**
3. **Comparación con métodos modernos de encriptación**
4. **Práctica de implementación de algoritmos de seguridad**

## 🤝 Contribuciones

Este proyecto está abierto a mejoras y contribuciones educativas:

- Implementación de análisis criptoanalítico
- Mejoras en la interfaz de usuario
- Adición de otros métodos de cifrado clásico
- Optimizaciones de rendimiento

## 📄 Licencia

Este proyecto es de uso educativo y se distribuye bajo términos académicos.

---

**Desarrollado para fines educativos en el curso de Seguridad Informática** 🎓
