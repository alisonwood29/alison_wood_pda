### Testing task 1 code:

# Carry out static testing on the code below.
# Read through the code.
# Comment any errors you can see without correcting them.


def func1 val
  #def func1(val)
  if val = 1
    #should read if val == 1 for comparison, this is setting val equal to 1
  return true
  else
  return false
  end
end

dif max a b
#def max(a, b)
  if a > b
      return a
  else
  b
  #should explicitly return b
  end
end
end
#one too many 'end' statements

def looper
  for i in 1..10
  puts i
  #function not returning anything at the moment
  end
end

failures = 0

if looper == 10
  puts "looper passed"
else
  puts "looper failed"
  failures = failures + 1
  #failures +=1
  #no end statement


if func1(3) == false
  puts "func1(3) passed"
else
  puts "func1(3) failed"
  failures = failures + 1
  #failures +=1
end


if max(100,1) == 100
  puts "max(100,1) passed"
else
  puts "func1(3) failed"
  #"max(100,1) failed"
  failrues = failures + 1
  #failures +=1, failures spelt wrong
end


if failures
  #failures > 0, failures is defined above so this doesn't make sense
  puts "Test Failed"
else
  puts "Test Passed"
end
