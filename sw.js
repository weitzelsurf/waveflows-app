{\rtf1\ansi\ansicpg1252\cocoartf2513
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 const CACHE_NAME = 'waveflows-v1';\
const urlsToCache = [\
  '/',\
  '/manifest.json',\
  '/icons/icon-192x192.png',\
  '/icons/icon-512x512.png',\
  '/app.js',\
  'https://cdn.tailwindcss.com'\
];\
\
self.addEventListener('install', event => \{\
  event.waitUntil(\
    caches.open(CACHE_NAME)\
      .then(cache => cache.addAll(urlsToCache))\
  );\
\});\
\
self.addEventListener('fetch', event => \{\
  event.respondWith(\
    caches.match(event.request)\
      .then(response => \{\
        if (response) \{\
          return response;\
        \}\
        return fetch(event.request);\
      \}\
    )\
  );\
\});}