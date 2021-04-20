# 멜론 베스트 앨범 뽑기

genres = ["classic", "pop", "classic", "classic", "pop"]
plays = [500, 600, 150, 800, 2500]


def get_melon_best_album(genre_array, play_array):
    result = []

    # 가장 많이 재생된 장르 찾기
    genre_dict = {}
    genre_plays = {}
    play_idx = 0
    for genre in genre_array:
        if genre in genre_dict:
            genre_dict[genre] += play_array[play_idx]
            genre_plays[genre].append((play_idx, play_array[play_idx]))
        else:
            genre_dict[genre] = play_array[play_idx]
            genre_plays[genre] = [(play_idx, play_array[play_idx])]
        play_idx += 1

    # 장르별 재생 횟수 정렬
    for key in genre_plays.keys():
        data = genre_plays[key]
        data =sorted(data, key=lambda x: x[1])
        genre_plays[key] = data

    # 장르 내에서 많이 재생된 노래 2개씩 추출
    res = sorted(genre_dict, key=lambda x:x[0], reverse=True)
    for key in res:
        target = genre_plays[key]
        cnt = 0
        while cnt != 2:
            if len(target) != 0:
                play = target.pop()
                result.append(play[0])
            cnt += 1

    return result


print(get_melon_best_album(genres, plays))  # 결과로 [4, 1, 3, 0] 가 와야 합니다!