![](http://www.tvoydom24.com/img/logo.png)

# Личный кабинет 
Недостатки
------------


###### 1. Не реализована статистика
###### 2. Не реализован полный функционал управления новостями  
###### 2. Не реализован полный функционал загрузки изображения на сервер
------------
## Руководство
Аутентификация пользователей происходит через страницу /login
## API
API реализована на простом PHP без REST
#### 1.Статистика
------------
Получение данных по статистике 
**METHOD GET**  параметр ccid ключ
http://www.tvoydom24.com/api/get_statistics_data.php?ccid=1



#### 2. Новости
------------
Получение Новостей
**METHOD GET**  параметр ccid ключ
http://www.tvoydom24.com/api/cc_news.php?ccid=1

Добавление новостей
**METHOD GET**  параметр ccid ключ
**{'news_title']** заголовок новостей
**['news_description']** описание новости
**['url_news_img']** - место хранения изображения
http://www.tvoydom24.com/api/add_news.php?[params]

#### 3.Показание счетчиков 
------------
Получение показания
**METHOD GET**  параметр ccid ключ
http://www.tvoydom24.com/api/counters_list.php?ccid=1

Поиск по значениям 
**METHOD POST**  описание есть в коде


#### 4.Платежи
------------
Получение платежей
**METHOD POST**  параметр ccid ключ
отправляемые параметры 
**[token]** - берется из Cookies
**[ccid]** - ключ
http://www.tvoydom24.com/api/payments.php

Поиск по значениям 
**METHOD POST**  описание есть в коде

#### 5.Услуги
------------
 ### Получение услуг
**METHOD POST**  параметр ccid ключ
отправляемые параметры 
**[token]** - берется из Cookies
**[ccid]** - ключ
http://www.tvoydom24.com/api/services.php
### Добавление услуг

**METHOD POST**
**[token]** - берется из Cookies
**[ccid]** - ключ
**[service_name]** - имя услуги
**[service_category]** - категория услуги
**[service_description]** - Описание  услуги
http://www.tvoydom24.com/api/add_service.php

### Изменение услуги

**METHOD POST**
**[token]** - берется из Cookies
**[ccid]** - ключ
**[service_name]** - имя услуги
**[service_category]** - категория услуги
**[service_description]** - Описание  услуги
http://www.tvoydom24.com/api/edit_service.php


###Удаление услуги


**METHOD POST**
**[token]** - берется из Cookies
**[ccid]** - ключ
**[sid]** - id услуги которую надо удалить
http://www.tvoydom24.com/api/edit_service.php

#### 6.Заказы
------------

Получение заказов
**METHOD GET**  параметр ccid ключ
http://www.tvoydom24.com/api/get_orders.php?ccid=1

Поиск по значениям 
**METHOD POST**  описание есть в коде

#### 7.Обращения
------------

Получение обращений
**METHOD GET**  параметр ccid ключ
http://www.tvoydom24.com/api/mail.php?ccid=1

Поиск по значениям 
**METHOD POST**  описание есть в коде

#### 8.Cписок адресов
------------

Получение обращений
**METHOD GET**  параметр ccid ключ
http://www.tvoydom24.com/api/get_area.php?ccid=1

Поиск по значениям 
**METHOD POST**  описание есть в коде
