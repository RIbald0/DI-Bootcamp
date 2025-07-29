MATRIX_STR = '''
7ii
Tsx
h%?
i #
sM 
$a 
#t%'''

Matrix_2d_list = []

rows = MATRIX_STR.strip().split('\n')

for row in rows:
    elements = list(row)
    Matrix_2d_list.append(elements)

print(Matrix_2d_list)

num_columns = len(Matrix_2d_list[0])
decoded = ""

for col_index in range(num_columns):
    for row_index in range(len(Matrix_2d_list)):
        char = Matrix_2d_list[row_index][col_index]
        decoded += char

print(decoded)

final_message = ''
adding_space = False

for char in decoded:
    if char.isalpha():
        if adding_space:
            final_message += ' '
            adding_space = False
        final_message += char
    else:
        adding_space = True      

print(final_message)







