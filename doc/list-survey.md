# Listar enquete

> ## Use case

1. [ ] Recebe uma requisição do tipo **GET** na rota **/api/surveys**
2. [ ] Valida se a requisição foi feita por um usuário
3. [x] Retorna 204 se não tivedr nenhuma enquete
3. [x] Retorna 200 com os dados das enquetes

> ## Exceptions

1. [ ] Retorna erro **404** se a API não existir
2. [ ] Retorna erro **403** se o usuário não for um usuário
3. [x] Retorna erro **500** se der erro ao tentar listar as enquetes
