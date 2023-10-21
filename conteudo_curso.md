
# ORM com NodeJS: avançando nas funcionalidades do Sequelize

## Soft Delete (Exclusão Suave)

### Aula 01 - Introdução - Video 1

Nesta aula do curso de ORM com NodeJS: avançando nas funcionalidades do Sequelize, aprendemos sobre o conceito de soft delete (exclusão suave). O soft delete é uma técnica que permite marcar registros como excluídos, em vez de removê-los definitivamente do banco de dados. Isso é útil para manter a integridade dos dados e possibilitar a recuperação de informações excluídas. Além disso, também vimos como o Sequelize traduz ferramentas do SQL para atender necessidades específicas de um projeto e como organizar melhor uma aplicação à medida que ela cresce em complexidade.  

Neste projeto utilizamos um linter para cuidar do estilo do código. Caso não queira utilizar, basta deletar a dependência e o arquivo .eslintrc da raiz do projeto:

### Aula 01 - Atualizando o projeto - Video 2

Nesta aula, o professor apresentou o projeto atual do curso, que consiste em uma API que reflete um diagrama de banco de dados. Foram feitas algumas alterações no projeto, como a inclusão de requisitos no arquivo "requisitos.md" e a adição de um linter para checar o estilo do código. O Sequelize, utilizado para criar os modelos automaticamente, passou por uma atualização de versão e foi necessário atualizar o projeto para a versão mais recente. O professor mostrou como fazer essa atualização e consertar um problema relacionado ao método "sequelize.import" que foi removido na nova versão. Após as atualizações, o projeto está pronto para ser modificado de acordo com os requisitos apresentados.

### Aula 01 - Ocultando sem deletar - Video 3

Nesta aula, aprendemos sobre o conceito de exclusão suave, também conhecida como "soft delete". Com o Sequelize, podemos marcar registros como deletados sem removê-los permanentemente do banco de dados. Utilizando a opção "paranoid: true" nos modelos das tabelas, o Sequelize realiza um update ao invés de um delete ao excluir registros. Isso adiciona um timestamp na coluna "deletedAt" e considera como registros ativos apenas aqueles que não possuem um timestamp nessa coluna. Para implementar o soft delete, é necessário adicionar a coluna "deletedAt" em todas as tabelas, o que pode ser feito utilizando as migrações do Sequelize.  

### Aula 01 - Mais colunas com migrações - Video 4

Nesta aula, aprendemos como adicionar uma coluna em uma tabela do banco de dados utilizando migrações. As migrações são importantes para registrar todas as alterações feitas no banco, permitindo desfazer alterações se necessário. Foi mostrado o código de uma migração para adicionar uma coluna em uma tabela, utilizando o método "add column". Também foi mencionado que é possível desfazer a migração utilizando o método "removeColumn". Além disso, foi demonstrado como implementar o **"soft delete"** utilizando a coluna "deletedAt" e como o Sequelize filtra automaticamente os registros excluídos ao fazer consultas.

### Aula 01 - Restaurando registros - Video 5

Nesta aula, aprendemos sobre o conceito de Soft Delete, que permite restaurar registros que foram deletados. Foi criado um método chamado "restauraPessoa" no controlador de pessoas, utilizando o método "restore" do Sequelize. Também foi adicionada uma rota para acessar esse método. Ao testar a rota no Postman, o registro foi restaurado com sucesso e não consta mais como deletado no banco de dados. Esse processo pode ser aplicado a outros modelos, atendendo ao requisito de exclusão não definitiva.  
Durante o vídeo criamos um novo método para restaurar registros que foram apagados da tabela Pessoas usando _soft delete_. Uma vez que adicionamos a opção { paranoid: true } em todos os modelos  
> existe também [paranoid: false](https://cursos.alura.com.br/course/orm-nodejs-avancando-sequelize/task/79552)
  pra fazer de alguma forma o hard delete (exclusão dura) de registros, e aí sim apagar uma linha de uma tabela em definitivo. A chave aqui é a propriedade force: true.

### Aula 01 - Conclusão - Nesta aula, aprendemos a

- Atualizar a versão do Sequelize
- Adicionar a opção "Paranoid" para fazer a exclusão suave
- Criar migrações para adicionar colunas às tabelas
- Criar coluna deletedAt para utilizar o recurso de exclusão suave
- Restaurar registros deletados via exclusão suave, utilizando o .restore()  

## Aula 02 - Escopo de Modelo e Validações

### Aula 02 - Escopos de Modelo - Video 1

Nesta aula, aprendemos sobre os escopos de modelo no Sequelize. Foi explicado como adicionar um escopo padrão no modelo de pessoas para filtrar os registros ativos. Também foi feito um teste no Postman para verificar se a lista de pessoas estava sendo exibida corretamente, excluindo os registros inativos. Na próxima aula, iremos aprender como sobrescrever o escopo padrão.

### Aula 02 - Outros Escopos - Video 2

Nesta aula, aprendemos sobre o uso de escopos no Sequelize. O escopo padrão, chamado de defaultScope, define um escopo padrão para a query select. Também vimos que é possível ter quantos escopos forem necessários. Foi adicionado um novo escopo chamado "todos" para trazer todos os registros, inclusive os que têm o campo "ativo" como falso. Modificações foram feitas no controlador e nas rotas para utilizar os dois casos na API. Também aprendemos como chamar um escopo específico usando o método .scope encadeado com o método findAll.

### Aula 02 - Validando dados - Video 3

Claro! Nessa aula de ORM com NodeJS, abordamos o escopo de modelo e as validações de dados usando o Sequelize. Falamos sobre a funcionalidade de soft delete, o escopo de modelo para exibir apenas pessoas ativas e a importância da validação dos dados de e-mail. Exploramos as diferentes formas de realizar validações no Sequelize, como tratamento direto dos dados usando JavaScript e comandos SQL, como o check. O Sequelize oferece várias opções de validações, como expressões regulares, float, decimal, upper case, data e até mesmo validação de número de cartão de crédito. Para a validação do campo de e-mail, utilizamos o isEmail true, com a opção de passar informações adicionais e uma mensagem de erro personalizada. No Postman, demonstramos como um e-mail inválido gera um erro de validação, enquanto um e-mail válido é aceito. Espero que isso resuma bem a aula para você!

### Aula 02 - Validação customizada - Video 4

Nesta aula, aprendemos a adicionar validações no modelo usando o Sequelize. Foi mostrado como fazer uma validação comum no nome, impedindo a entrada de dados com menos de três caracteres. Também aprendemos a criar uma função validadora mais específica, utilizando um if para verificar o tamanho da string e lançando um erro caso seja menor que 3. Foi mencionado que os métodos de validação do Sequelize já cobrem a maioria dos casos, mas é possível usar JavaScript puro para fazer validações mais específicas.

### Aula 02 - [Para saber mais: Validação de dados únicos](https://cursos.alura.com.br/course/orm-nodejs-avancando-sequelize/task/79563)

São constraints em SQL: 08 aula  

- NOT NULL - garante que não exista nenhum valor NULL na coluna;

- UNIQUE - Garante que não existam valores iguais em uma coluna;

- PRIMARY KEY - Identifica cada linha em uma tabela através de um valor único (junção de NOT NULL e UNIQUE);

- FOREIGN KEY - Identifica um valor único em outra tabela como chave;

- CHECK - Garante que todos os valores em uma coluna satisfazem uma condição específica;

- DEFAULT - Determina um valor padrão caso nenhum valor seja informado;

- INDEX - Para criar índices e facilitar o acesso a determinados conjuntos de dados.

### Aula 02 - Conclusão - Nesta aula, aprendemos a

Definir um escopo de modelo padrão (defaultScope)
Definir outros escopos adicionais, conforme necessidade do projeto
Utilizar um escopo adicional com o método .findAll()
Validar dados de entrada utilizando validadores próprios do Sequelize
Refinar e customizar validações de campos utilizando funções e JS puro

## Aula 03 - Escopo de Associação e Operadores

### Aula 03 - Escopos de Associação - Video 1

Nesta aula, o professor aborda a criação de um novo método no controlador de pessoas para consultar todas as matrículas confirmadas de um estudante específico. Ele sugere o uso do método findAll do Sequelize para buscar as matrículas relacionadas a esse estudante. Além disso, o professor menciona a utilização do escopo de associação do Sequelize, que é uma forma mais eficiente de fazer a filtragem. Ele mostra como definir o escopo de associação no modelo de pessoas e como utilizar os métodos automáticos gerados pelo Sequelize a partir das associações.

### Aula 03 - Usando mixins - Video 2

Nesta aula, aprendemos sobre a definição de escopos na associação entre modelos no Sequelize. O Sequelize gera automaticamente alguns métodos a partir desses escopos, chamados de mixins, que reduzem a quantidade de código necessário para fazer queries. Utilizamos o método getAulasMatriculadas para consultar todas as matrículas confirmadas de um estudante. No controlador de pessoas, adicionamos esse método para consultar as matrículas confirmadas de um estudante específico. Criamos uma rota para testar essa funcionalidade e verificamos que as matrículas foram retornadas corretamente. Também aprendemos que os mixins podem ser utilizados sem a necessidade de passar um escopo.  
> Podemos resumir mixins em: classes que contêm métodos que podem ser utilizados por outras classes, sem a necessidade de herança direta. Dito de outra forma, um mixin fornece métodos que implementam um certo comportamento em objetos, sem poder ser utilizado sozinho, mas sim para adicionar esse comportamento a outras classes.  
>No Sequelize, temos uma diferença entre escopos de modelo, que são aplicados em chamadas estáticas ao modelo (como no exemplo que fizemos no vídeo, Pessoas.scope('todos').findAll()), e escopos de associação, que são uma regra, ou um conjunto de atributos que são automaticamente aplicados em instâncias do modelo, como em Pessoas.associate = function(models) {...}.  
>Escopos de associação se comportam da mesma forma que os escopos de modelo, no sentido que ambos aplicam palavras-chave como WHERE em chamadas ao banco; mas os mixins são métodos que existem somente nas instâncias dos modelos: Pessoas.getPessoasMatriculadas, Niveis.getNiveisPorTurma, etc.

### Aula 03 - Usando operadores - Video 3

Nesta aula, aprendemos como permitir a consulta de turmas abertas por intervalo de data utilizando parâmetros de query strings. Foi explicado como utilizar os operadores do Sequelize, como maior que, menor que e entre, para filtrar os resultados. Aprendemos a importar e utilizar esses operadores no código, e também como montar o objeto "where" para aplicar o filtro de datas no método "findAll" do Sequelize. Utilizamos ifs ternários para verificar se os parâmetros de data foram passados e, caso positivo, adicioná-los ao objeto "where". Por fim, fizemos um teste no Postman para verificar se o filtro estava funcionando corretamente.

- Os escopos de associação são definidos nas instâncias de um modelo, ao contrário dos próprios escopos de modelo.  
  - Alternativa correta! Se voltarmos ao código, podemos ver que o escopo de modelo é definido dentro do objeto Modelo. Já o de associação está ligado a uma instância desse modelo, como por exemplo Pessoas.hasMany(...).

- É possível refinar e incluir novos escopos caso necessário, utilizando a opção scope: { atributo: valor } e dando um nome a este escopo com a opção as: 'nomeDoEscopo'  
  - Alternativa correta! Como fizemos no vídeo, é possível adicionar um escopo a uma associação e definir um nome pelo qual os métodos serão chamados. Os mixins serão criados a partir deste nome, por exemplo getNomeDoEscopo().

- Os escopos de associação geram alguns métodos (ou mixins) que já fornecem operações comuns de banco, por exemplo Pessoas.getMatriculas(), Pessoas.createMatricula(), Pessoas.countMatriculas().  
  - Alternativa correta! Como vimos do material extra do curso anterior, as associações feitas através dos métodos hasOne(), HasMany(), belongsTo() e belongsToMany() já disponibilizam estes métodos, independente de existir ou não um escopo de associação definido.
  