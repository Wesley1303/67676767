use Antonio3DSC;


CREATE TABLE produtos
(
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    preco DECIMAL(12,2) NOT NULL,
    marca VARCHAR(50) NOT NULL,
    numero_serie VARCHAR(30) NOT NULL UNIQUE
);

# CADASTRAR 30 CARROS DAS MARCAS FORD E DODGE:

INSERT INTO produtos (nome, preco, marca, numero_serie) VALUES
('Ford Mustang GT', 320000.00, 'Ford', 'FORD-2026-001'),
('Ford Mustang Mach-E', 350000.00, 'Ford', 'FORD-2026-002'),
('Ford Ranger XLS', 220000.00, 'Ford', 'FORD-2026-003'),
('Ford Ranger Limited', 310000.00, 'Ford', 'FORD-2026-004'),
('Ford Maverick Lariat', 240000.00, 'Ford', 'FORD-2026-005'),
('Ford Territory Titanium', 215000.00, 'Ford', 'FORD-2026-006'),
('Ford Bronco Sport', 260000.00, 'Ford', 'FORD-2026-007'),
('Ford F-150 Lariat', 480000.00, 'Ford', 'FORD-2026-008'),
('Ford F-150 Platinum', 550000.00, 'Ford', 'FORD-2026-009'),
('Ford Escape Titanium', 230000.00, 'Ford', 'FORD-2026-010'),
('Ford Focus Titanium', 95000.00, 'Ford', 'FORD-2026-011'),
('Ford Fiesta SE', 55000.00, 'Ford', 'FORD-2026-012'),
('Ford EcoSport Titanium', 85000.00, 'Ford', 'FORD-2026-013'),
('Ford Edge ST', 280000.00, 'Ford', 'FORD-2026-014'),
('Ford Explorer Limited', 390000.00, 'Ford', 'FORD-2026-015'),
('Dodge Charger R/T', 350000.00, 'Dodge', 'DODGE-2026-016'),
('Dodge Charger SRT Hellcat', 650000.00, 'Dodge', 'DODGE-2026-017'),
('Dodge Challenger R/T', 330000.00, 'Dodge', 'DODGE-2026-018'),
('Dodge Challenger SRT Demon', 750000.00, 'Dodge', 'DODGE-2026-019'),
('Dodge Durango GT', 310000.00, 'Dodge', 'DODGE-2026-020'),
('Dodge Durango SRT', 480000.00, 'Dodge', 'DODGE-2026-021'),
('Dodge Journey SXT', 90000.00, 'Dodge', 'DODGE-2026-022'),
('Dodge Hornet GT', 220000.00, 'Dodge', 'DODGE-2026-023'),
('Dodge Viper GTS', 850000.00, 'Dodge', 'DODGE-2026-024'),
('Dodge Ram 1500', 420000.00, 'Dodge', 'DODGE-2026-025'),
('Dodge Ram 2500', 500000.00, 'Dodge', 'DODGE-2026-026'),
('Ford GT', 2500000.00, 'Ford', 'FORD-2026-027'),
('Ford Bronco Wildtrak', 350000.00, 'Ford', 'FORD-2026-028'),
('Dodge Charger Daytona', 400000.00, 'Dodge', 'DODGE-2026-029'),
('Dodge Challenger SXT', 280000.00, 'Dodge', 'DODGE-2026-030');

# VISUALIZAR TODOS OS PRODUTOS:
SELECT * FROM produtos;

# VISUALIZAR NOME E PREÇO DOS CARROS:
SELECT nome, preco FROM produtos;

# PESQUISAR SOMENTE CARROS DA FORD:
SELECT * FROM produtos
WHERE marca = 'Ford';

# PESQUISAR SOMENTE CARROS DA DODGE:
SELECT * FROM produtos
WHERE marca = 'Dodge';

# PESQUISAR CARROS COM PREÇO ACIMA DE R$ 300.000:
SELECT * FROM produtos
WHERE preco > 300000;

# ORDENAR OS CARROS DO MAIS BARATO AO MAIS CARO:
SELECT * FROM produtos
ORDER BY preco ASC;

# EXCLUIR UM PRODUTO PELO ID:
DELETE FROM produtos
WHERE id = 1;

# ALTERAR O PREÇO DE UM PRODUTO:
UPDATE produtos
SET preco = 330000.00
WHERE id = 1;
