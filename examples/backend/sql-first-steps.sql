-- Creación de tabla
CREATE TABLE Usuario (
  Id INT NOT NULL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  email VARCHAR(100) NOT NULL,
  birthday DATE NOT NULL,
  active BOOLEAN NOT NULL
);

-- Selección de tabla 
SELECT * from Usuario;

-- Alterar tabla y agregar nueva columna
ALTER TABLE Usuario
ADD COLUMN edad INT;

-- Alterar una tabla y borrar una columna
ALTER TABLE Usuario
DROP COLUMN direccion;

-- Insertar usuarios
INSERT INTO Usuario (id, name, email, birthday, active, edad)
VALUES (1, 'Juan', 'juan@example.com', '2023-03-23', true, 25);

INSERT INTO Usuario (id, name, email, birthday, active, edad)
VALUES (2, 'Pedro', 'pedro@example.com', '2023-03-23', false, 15);

-- Seleccionar usuarios mayores o iguales a 18 años
SELECT *
FROM Usuario
WHERE edad >= 18; 

-- Seleccionar usuarios en un rango de edad
SELECT * FROM Usuario
WHERE edad BETWEEN 18 AND 70;

--actualizar un campo
UPDATE Usuario
SET email = 'nuevo_email@example.com'
WHERE nombre = 'Juan';

--Borrar un registro
DELETE FROM Usuario
WHERE id = 1;