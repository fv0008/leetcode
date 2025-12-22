func convert(s string, numRows int) string {
	n := len(s)
	if numRows <= 1 || n <= numRows {
		return s
	}
	arr := make([]byte, n)
	flag := 0
	add := 2*numRows - 2
	for i := 0; i < n; i += add {
		arr[flag] = s[i]
		flag++
	}
	for row := 1; row < numRows-1; row++ {
		step1 := 2*numRows - 2 - 2*row
		step2 := 2 * row
		i := row
		step := true
		for i < n {
			arr[flag] = s[i]
			flag++
			if step {
				i = i + step1
			} else {
				i = i + step2
			}
			step = !step
		}
	}
	for i := numRows - 1; i < n; i += add {
		arr[flag] = s[i]
		flag++
	}
	return string(arr)
}