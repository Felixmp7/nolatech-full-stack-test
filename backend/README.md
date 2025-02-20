# Requerimientos:
## Backend (Node.js + Express):
1. Implementar una API RESTful con los siguientes endpoints:
- POST /api/auth/register: Registro de usuarios ✅
- POST /api/auth/login: Inicio de sesión (devuelve JWT) ✅
- GET /api/employees: Obtener lista de empleados ✅
- POST /api/evaluations: Crear una nueva evaluación ✅
- GET /api/evaluations/:id: Obtener detalles de una evaluación ✅
- PUT /api/evaluations/:id: Actualizar una evaluación ✅
- GET /api/evaluations/employee/:id: Obtener evaluaciones de un empleado ✅
- POST /api/feedback: Enviar feedback para una evaluación
- GET /api/reports/employee/:id: Generar reporte de evaluación para un empleado ✅

2. Implementar autenticación JWT y manejo de roles (Admin, Manager, Employee)
3. Crear modelos de datos para Usuario, Empleado, Evaluación y Feedback ✅
4. Implementar lógica para calcular resultados de evaluaciones
5. Utilizar middleware para manejar errores y validar datos de entrada ✅