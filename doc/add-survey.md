# Criar enquete

> ## Use case

1. [x] Recebe uma requisição do tipo **POST** na rota **/api/surveys**
2. [ ] Valida se a requisição foi feita por um admin 
3. [x] Valida dados obrigatórios **questions** e **answers**
4. [x] Cria uma enquete com os dados fornecidos
5. [x] Retorna  204

> ## Exceptions

1. [x] Retorna erro **404** se a API não existir
2. [ ] Retorna erro **403** se o usuário não for admin
3. [x] Retorna erro **400** se **questions** ou **answers** não forem fornecidos pelo client
4. [x] Retorna erro **500** se der erro ao tentar criar a enquete
