
const db = require("./db")

// ESTRUTURA DA TABELA CLIENTE
const ESTRUTURA_CLIENTE = `
DROP TABLE IF EXISTS cliente;
CREATE TABLE cliente (
    id int NOT NULL AUTO_INCREMENT,
    nome varchar(50) NOT NULL,
    cpf char(14) NOT NULL,
    celular char(14) NOT NULL,
    email varchar(50) NOT NULL,
    senha varchar(512) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
    PRIMARY KEY (id),
    UNIQUE KEY cpf (cpf),
    UNIQUE KEY email (email)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;`

// DADOS DA TABELA CLIENTE
const DADOS_CLIENTE = `
INSERT INTO cliente (nome, cpf, celular, email, senha) VALUES
('Lucas Silva', '222.333.444-55', '(42)99888-1111', 'lucas.silva@gmail.com', 'JSUAHSIDHAISUHD'),
('Mariana Costa', '333.444.555-66', '(41)99777-2222', 'mari.costa@hotmail.com', 'KASJDKAJSHDKAJS'),
('Carlos Eduardo', '444.555.666-77', '(11)99666-3333', 'carlos.edu@outlook.com', 'QWEOIUQWOIEUQWO'),
('Ana Beatriz', '555.666.777-88', '(21)99555-4444', 'ana.bia@gmail.com', 'ZMXNCBVMZNCBVZ'),
('Rodrigo Souza', '666.777.888-99', '(31)99444-5555', 'rodrigo.souza@yahoo.com', 'PLMOKNJBHIUYT'),
('Juliana Mendes', '777.888.999-00', '(42)99333-6666', 'ju.mendes@gmail.com', 'OEIUROYTIREUYT'),
('Fernando Dias', '888.999.000-11', '(43)99222-7777', 'fernando.dias@outlook.com', 'ASDFGHJKLPOIUY'),
('Beatriz Rocha', '999.000.111-22', '(41)99111-8888', 'bia.rocha@hotmail.com', 'MNBVCXZLKJHGFD'),
('Ricardo Alves', '000.111.222-33', '(11)99000-9999', 'ricardo.alves@gmail.com', 'POIUYTREWQASDF'),
('Patrício Antunes', '123.456.789-10', '(21)98999-0000', 'paty.antunes@gmail.com', 'ZXCVBNMASDFGHJ');`

// ESTRUTURA DA TABELA PRODUTO
const ESTRUTURA_PRODUTO = `
DROP TABLE IF EXISTS produto;
CREATE TABLE produto (
    id int NOT NULL AUTO_INCREMENT,
    nome varchar(100) NOT NULL,
    preco decimal(10,2) NOT NULL,
    marca varchar(50) NOT NULL,
    codigo varchar(30) NOT NULL,
    PRIMARY KEY (id),
    UNIQUE KEY codigo (codigo)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;`

// DADOS DA TABELA PRODUTO
const DADOS_PRODUTO = `
INSERT INTO produto (nome, preco, marca, codigo) VALUES
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
('Dodge Challenger SXT', 280000.00, 'Dodge', 'DODGE-2026-030');`

// FUNÇÃO PARA CRIAR AS TABELAS
async function criar_tabelas() {
    const connection = await db.pool.getConnection();

    try {
        await connection.beginTransaction();

        console.log("Criando tabela 'cliente'...");
        await connection.query(ESTRUTURA_CLIENTE);
        await connection.query(DADOS_CLIENTE);

        console.log("Criando tabela 'produto'...");
        await connection.query(ESTRUTURA_PRODUTO);
        await connection.query(DADOS_PRODUTO);

        await connection.commit();

        console.log("Migration executada com sucesso!");
        process.exit(0);

    } catch (error) {
        await connection.rollback();
        console.log(error);
        process.exit(1);

    } finally {
        connection.release();
    }
}

criar_tabelas()
