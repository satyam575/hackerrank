(s, e, d) = gets.strip.split.map(&:to_i)

count = 0

for i in s..e
 reverse = i.to_s.reverse!.to_f
 x = (i - reverse) / d
 if (x % 1).zero?
    count = count + 1
 end
end

puts count
