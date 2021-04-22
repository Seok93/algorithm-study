# 멜론 베스트 앨범 뽑기

genres = ["classic", "pop", "classic", "classic", "pop"]
plays = [500, 600, 150, 800, 2500]


def get_melon_best_album(genre_array, play_array):
    result = []

    genres_total_count_dict = {}  # 장르별 재생 횟수
    genres_play_list_dict = {}  # 장르별 음악 리스트

    for i in range(len(genres)):
        genre = genres[i]
        play = plays[i]
        if genre not in genres_total_count_dict.keys():
            genres_total_count_dict[genre] = play
            genres_play_list_dict[genre] = [(i, play)]
        else:
            genres_total_count_dict[genre] += play
            genres_play_list_dict[genre].append((i, play))

    # 장르별 재생 횟수 정렬
    sorted_genre = sorted(genres_total_count_dict.items(), key=lambda item: item[1], reverse=True)

    # 장르 내 재생 횟수 정렬
    for key in genres_play_list_dict.keys():
        data = genres_play_list_dict[key]
        data = sorted(data, key=lambda x: (x[1], -x[0]))
        genres_play_list_dict[key] = data

    # 장르별 최다 재생곡 2개씩 추출
    for key, value in sorted_genre:
        target = genres_play_list_dict[key]
        extract_cnt = 2
        while len(target) > 0 and extract_cnt > 0:
            result.append(target.pop()[0])
            extract_cnt -= 1

    return result


print(get_melon_best_album(genres, plays))  # 결과로 [4, 1, 3, 0] 가 와야 합니다!
