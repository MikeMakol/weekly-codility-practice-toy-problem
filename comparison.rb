def comparison(a, b)
    compare = [
      "#{a} is equal to #{b}",
      "#{a} is greater than #{b}",
      "#{a} is smaller than #{b}"
    ]

    compare[(a <=> b)]
end
puts comparison(4, 2) 
