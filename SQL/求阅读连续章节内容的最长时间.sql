/*!
其中
userid是用户
charpter是章节
ltime是用户阅读该章节的时间长度
求阅读连续章节时间最长的用户

本来考试开窗来的，现在看其实也不用，但是确实需要分析函数
*/;

DROP TABLE IF EXISTS `qc`;

CREATE TABLE `qc` (
  `userid` int DEFAULT NULL,
  `charpter` int DEFAULT NULL,
  `ltime` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


LOCK TABLES `qc` WRITE;

INSERT INTO `qc` VALUES (1,2,10),(1,3,2),(1,8,2),(2,4,2),(2,5,5),(2,6,2),(2,9,2);

UNLOCK TABLES;

select
   t1.userid,min(t1.charpter ) as begin,max(t1.charpter ) as end,max(t1.charpter )-min(t1.charpter )+1 as chapters,sum(t1.ltime) as timelong
from (select * from qc as q where exists(select qc.charpter from qc where charpter=q.charpter+1 and q.userid=userid) or exists(select qc.charpter from qc where charpter=q.charpter-1 and q.userid=userid)) t1
group by t1.userid order by timelong desc

/*
最终是阅读章节和时间的总长度，如果求章节最长，order by timelong desc 替换成 order by  chapters desc
*/

set @num = 0
select
       min(t.charpter ) as begin,max(t.charpter ) as end,max(t.charpter )-min(t.charpter )+1 as chapters,sum(t.ltime) as timelong,grp
from(select *,@num:=@num+1  as row1,@num  - charpter as grp from qc as q where exists(select qc.charpter from qc where charpter=q.charpter+1 and q.userid=userid) or exists(select qc.charpter from qc where charpter=q.charpter-1 and q.userid=userid)
           ) t
group by t.grp

/*
相对来说用@num或者row_number()方式更好，比left join和exists的方式扫描表的时间少，可能需要处理下ONLY_FULL_GROUP_BY
set @@sql_mode ='STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION'
就可以了
*/
