
# ORM com NodeJS: avançando nas funcionalidades do Sequelize

## Aula 01 - Introdução - Video 1

Nesta aula do curso de ORM com NodeJS: avançando nas funcionalidades do Sequelize, aprendemos sobre o conceito de soft delete (exclusão suave). O soft delete é uma técnica que permite marcar registros como excluídos, em vez de removê-los definitivamente do banco de dados. Isso é útil para manter a integridade dos dados e possibilitar a recuperação de informações excluídas. Além disso, também vimos como o Sequelize traduz ferramentas do SQL para atender necessidades específicas de um projeto e como organizar melhor uma aplicação à medida que ela cresce em complexidade.  

Neste projeto utilizamos um linter para cuidar do estilo do código. Caso não queira utilizar, basta deletar a dependência e o arquivo .eslintrc da raiz do projeto:

## Aula 01 - Atualizando o projeto - Video 2

Nesta aula, o professor apresentou o projeto atual do curso, que consiste em uma API que reflete um diagrama de banco de dados. Foram feitas algumas alterações no projeto, como a inclusão de requisitos no arquivo "requisitos.md" e a adição de um linter para checar o estilo do código. O Sequelize, utilizado para criar os modelos automaticamente, passou por uma atualização de versão e foi necessário atualizar o projeto para a versão mais recente. O professor mostrou como fazer essa atualização e consertar um problema relacionado ao método "sequelize.import" que foi removido na nova versão. Após as atualizações, o projeto está pronto para ser modificado de acordo com os requisitos apresentados.

## Aula 01 - Ocultando sem deletar - Video 3

Nesta aula, aprendemos sobre o conceito de exclusão suave, também conhecida como "soft delete". Com o Sequelize, podemos marcar registros como deletados sem removê-los permanentemente do banco de dados. Utilizando a opção "paranoid: true" nos modelos das tabelas, o Sequelize realiza um update ao invés de um delete ao excluir registros. Isso adiciona um timestamp na coluna "deletedAt" e considera como registros ativos apenas aqueles que não possuem um timestamp nessa coluna. Para implementar o soft delete, é necessário adicionar a coluna "deletedAt" em todas as tabelas, o que pode ser feito utilizando as migrações do Sequelize.  

## Aula 01 - Mais colunas com migrações - Video 4

Nesta aula, aprendemos como adicionar uma coluna em uma tabela do banco de dados utilizando migrações. As migrações são importantes para registrar todas as alterações feitas no banco, permitindo desfazer alterações se necessário. Foi mostrado o código de uma migração para adicionar uma coluna em uma tabela, utilizando o método "add column". Também foi mencionado que é possível desfazer a migração utilizando o método "removeColumn". Além disso, foi demonstrado como implementar o **"soft delete"** utilizando a coluna "deletedAt" e como o Sequelize filtra automaticamente os registros excluídos ao fazer consultas.

## Aula 01 - Restaurando registros - Video 5

Nesta aula, aprendemos sobre o conceito de Soft Delete, que permite restaurar registros que foram deletados. Foi criado um método chamado "restauraPessoa" no controlador de pessoas, utilizando o método "restore" do Sequelize. Também foi adicionada uma rota para acessar esse método. Ao testar a rota no Postman, o registro foi restaurado com sucesso e não consta mais como deletado no banco de dados. Esse processo pode ser aplicado a outros modelos, atendendo ao requisito de exclusão não definitiva.  
Durante o vídeo criamos um novo método para restaurar registros que foram apagados da tabela Pessoas usando _soft delete_. Uma vez que adicionamos a opção { paranoid: true } em todos os modelos  
> existe também [paranoid: false](https://cursos.alura.com.br/course/orm-nodejs-avancando-sequelize/task/79552)
  pra fazer de alguma forma o hard delete (exclusão dura) de registros, e aí sim apagar uma linha de uma tabela em definitivo. A chave aqui é a propriedade force: true.

## Aula 01 - Conclusão - Nesta aula, aprendemos a

- Atualizar a versão do Sequelize
- Adicionar a opção "Paranoid" para fazer a exclusão suave
- Criar migrações para adicionar colunas às tabelas
- Criar coluna deletedAt para utilizar o recurso de exclusão suave
- Restaurar registros deletados via exclusão suave, utilizando o .restore()