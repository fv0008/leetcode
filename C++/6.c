char* convert(char* s, int numRows) {
	if(numRows==1)
		return s;
	else if(numRows==2)
	{
		char* s1=calloc(strlen(s)+1,sizeof(char));
		int index=0;
		for(int i=0;i<strlen(s);i+=2,index++)
			s1[index]=s[i];
		for(int i=1;i<strlen(s);i+=2,index++)
			s1[index]=s[i];
		return s1;
	}
	else
	{
		char* s2=calloc(strlen(s)+1,sizeof(char));
		int in=0;
		int pass=(numRows-1)*2;
		int save=strlen(s)%pass-1;//余数
		for(int i=0;i<strlen(s);i+=pass,in++)
			s2[in]=s[i];
		for(int i=1;i<numRows-1;i++)
		{
			for(int n=0;n<strlen(s)/pass;n++,in+=2)
			{
				s2[in]=s[n*pass+i];
				s2[in+1]=s[n*pass+pass-i];
			}
			if(save>=i)
			{
				s2[in]=s[strlen(s)/pass*pass+i];
				in++;
			}
			if(save>=(pass-i))
			{
				s2[in]=s[strlen(s)/pass*pass+pass-i];
				in++;
			}
		}
		for(int i=pass/2;i<strlen(s);i+=pass,in++)
			s2[in]=s[i];
		return s2;
	}
	
	
}