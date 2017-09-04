arr = gets.strip
arr = arr.split(' ').map(&:to_i)

result1 = 0
result2 = 0

max = arr.max
min = arr.min

for i in arr
    result1 += i
    result2 += i
end

result1 = result1 - max
result2 = result2 - min

puts "#{result1}" + " " + "#{result2}"