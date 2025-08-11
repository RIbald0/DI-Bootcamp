from anagram_checker import AnagramChecker

while True:
    user_word = input("Please add an English word or 'exit' to quit: ")
    cleaned_word = user_word.strip()
    if cleaned_word == 'exit':
        break
    else:
        new_list = cleaned_word.split()
        list_length = len(new_list)
        if list_length != 1:
            print("Only a single word can be printed, please try again")
            continue
        if not cleaned_word.isalpha():
            print("Only alphabetic characters are accepted, please try again")
            continue
        word_check = AnagramChecker()
        if word_check.is_valid_word(cleaned_word.lower()):
            anagrams = word_check.get_anagrams(cleaned_word.lower())
            anagram_string = ", ".join(anagrams)
            print("\n--------------------")
            print(f"YOUR WORD: \"{cleaned_word.upper()}\"")
            print("This is a valid English word.")
            print(f"Anagrams for your word: {anagram_string}")
        else:
            print(f"YOUR WORD: \"{cleaned_word.upper()}\"")
            print("This is not a valid English word.")
