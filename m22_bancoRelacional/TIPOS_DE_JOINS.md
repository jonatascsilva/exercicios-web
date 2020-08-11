# 1. Tipos de JOIN

  Considerando as tabelas e seu interrelacionamento Tabela A <> Tabela B:

- ### INNER JOIN
  São os dados dentro de uma interseção entre duas tabelas A e B, sendo que na
  tabela B ou A existe uma coluna com FK para poder relacioná-las.

- ### OUTER JOIN
  São os dados das duas tabelas  A e B que não estão dentro da interseção.

- ### LEFT JOIN ou LEFT OUTER JOIN
  São os dados do INNER JOIN + os dados do OUTER JOIN apenas do lado esquerdo
  (no caso, tabela A).

- ### RIGHT JOIN ou RIGHT OUTER JOIN
  São os dados do INNER JOIN + os dados do OUTER JOIN apenas do lado direito (no
  caso, tabela B).

- ### FULL JOIN
  São todos os dados do INNER JOIN + os dados do OUTER JOIN dos dois lados (no
  mySQL não é suportado nativamente, porém é possível simular juntando LEFT JOIN
  `+` RIGHT JOIN).
