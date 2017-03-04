#!/usr/bin/env python
import logging
from aiocache import RedisCache

# Search engine
URL_PHONE = 'https://m.baidu.com/s'
URL_PC = 'http://www.baidu.com/s'
BAIDU_RN = 50
USER_AGENT = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.95 Safari/537.36'

# logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s: %(message)s')
LOGGER = logging.getLogger('novels_search')

# aiocache
REDIS_DICT = dict(
    IS_CACHE=True,
    REDIS_ENDPOINT="",
    REDIS_PORT=6379,
    CACHE_DB=0,
    SESSION_DB=1,
    POOLSIZE=4,
)
AIO_CACHE = RedisCache(endpoint=REDIS_DICT['REDIS_ENDPOINT'], port=REDIS_DICT['REDIS_PORT'], namespace="main")

# mongodb
MONGODB = dict(
    HOST="",
    PORT="",
    USERNAME='',
    PASSWORD='',
    DATABASE='owllook',
)

# website
WEBSITE = dict(
    IS_RUNNING=True,
    TOKEN=''
)

TIMEZONE = 'Asia/Shanghai'
