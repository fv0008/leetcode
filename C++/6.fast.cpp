{\rtf1\ansi\ansicpg936\cocoartf2867
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue255;\red255\green255\blue255;\red0\green0\blue0;
\red32\green108\blue135;\red101\green76\blue29;\red0\green0\blue109;\red157\green0\blue210;\red19\green118\blue70;
\red15\green112\blue1;}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c100000;\cssrgb\c100000\c100000\c100000;\cssrgb\c0\c0\c0;
\cssrgb\c14902\c49804\c60000;\cssrgb\c47451\c36863\c14902;\cssrgb\c0\c6275\c50196;\cssrgb\c68627\c0\c85882;\cssrgb\c3529\c52549\c34510;
\cssrgb\c0\c50196\c0;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs26 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 class\cf0 \strokec4  \cf5 \strokec5 Solution\cf0 \strokec4  \{\cb1 \
\cf2 \cb3 \strokec2 public:\cf0 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3     \cf5 \strokec5 string\cf0 \strokec4  \cf6 \strokec6 convert\cf0 \strokec4 (\cf5 \strokec5 string\cf0 \strokec4  \cf7 \strokec7 s\cf0 \strokec4 , \cf2 \strokec2 int\cf0 \strokec4  \cf7 \strokec7 numRows\cf0 \strokec4 ) \{\cb1 \
\cb3         \cf2 \strokec2 int\cf0 \strokec4  n = \cf7 \strokec7 s\cf0 \strokec4 .\cf6 \strokec6 length\cf0 \strokec4 (), r = numRows;\cb1 \
\cb3         \cf8 \strokec8 if\cf0 \strokec4  (r == \cf9 \strokec9 1\cf0 \strokec4  || r >= n) \{\cb1 \
\cb3             \cf8 \strokec8 return\cf0 \strokec4  s;\cb1 \
\cb3         \}\cb1 \
\cb3         \cf2 \strokec2 int\cf0 \strokec4  t = r * \cf9 \strokec9 2\cf0 \strokec4  - \cf9 \strokec9 2\cf0 \strokec4 ;\cb1 \
\cb3         \cf2 \strokec2 int\cf0 \strokec4  c = (n + t - \cf9 \strokec9 1\cf0 \strokec4 ) / t * (r - \cf9 \strokec9 1\cf0 \strokec4 );\cb1 \
\cb3         vector<string> \cf6 \strokec6 mat\cf0 \strokec4 (r, \cf6 \strokec6 string\cf0 \strokec4 (c, \cf9 \strokec9 0\cf0 \strokec4 ));\cb1 \
\cb3         \cf8 \strokec8 for\cf0 \strokec4  (\cf2 \strokec2 int\cf0 \strokec4  i = \cf9 \strokec9 0\cf0 \strokec4 , x = \cf9 \strokec9 0\cf0 \strokec4 , y = \cf9 \strokec9 0\cf0 \strokec4 ; i < n; ++i) \{\cb1 \
\cb3             \cf7 \strokec7 mat\cf0 \strokec4 [x][y] = \cf7 \strokec7 s\cf0 \strokec4 [i];\cb1 \
\cb3             \cf8 \strokec8 if\cf0 \strokec4  (i % t < r - \cf9 \strokec9 1\cf0 \strokec4 ) \{\cb1 \
\cb3                 ++x;\cf10 \strokec10  // \uc0\u21521 \u19979 \u31227 \u21160 \cf0 \cb1 \strokec4 \
\cb3             \} \cf8 \strokec8 else\cf0 \strokec4  \{\cb1 \
\cb3                 --x;\cb1 \
\cb3                 ++y;\cf10 \strokec10  // \uc0\u21521 \u21491 \u19978 \u31227 \u21160 \cf0 \cb1 \strokec4 \
\cb3             \}\cb1 \
\cb3         \}\cb1 \
\cb3         string ans;\cb1 \
\cb3         \cf8 \strokec8 for\cf0 \strokec4  (\cf2 \strokec2 auto\cf0 \strokec4  &row : mat) \{\cb1 \
\cb3             \cf8 \strokec8 for\cf0 \strokec4  (\cf2 \strokec2 char\cf0 \strokec4  ch : row) \{\cb1 \
\cb3                 \cf8 \strokec8 if\cf0 \strokec4  (ch) \{\cb1 \
\cb3                     ans += ch;\cb1 \
\cb3                 \}\cb1 \
\cb3             \}\cb1 \
\cb3         \}\cb1 \
\cb3         \cf8 \strokec8 return\cf0 \strokec4  ans;\cb1 \
\cb3     \}\cb1 \
\cb3 \};\cb1 \
\
}