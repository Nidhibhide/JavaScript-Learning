1.null and undefined both represent “empty value” 
1]null == undefined - true 

2.null === undefined - false 

3.null converted to 0 in comparison op not in equality op
1]null > 0 - false  
2]null >= 0 - true 
3]null == 0 - false 


4.undefined Converted to NaN (Any comparison with NaN is false)
1]undefined > 0 - false 
2]undefined < 0 - false 
3]undefined >= 0 - false 
4]undefined == 0  -false

