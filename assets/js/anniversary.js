/**
  * 指定した日の記念日を返す.
  * 複数あったらランダムにどれかを返す.
 **/
function getAnniversary(date){
  var annivList = anniversary[date];
  return annivList[Math.floor(Math.random() * annivList.length)];
}

var anniversary = {
  '0101': ['鉄腕アトムの日'],
  '0102': ['月ロケットの日'],
  '0103': ['瞳の日','駆け落ちの日'],
  '0104': ['石の日'],
  '0105': ['囲碁の日','いちごの日','シンデレラの日'],
  '0106': ['色の日','ショートケーキの日'],
  '0107': ['爪切りの日','千円札の日','銀の日'],
  '0108': ['外国郵便の日','勝負事の日'],
  '0109': ['風邪の日','とんちの日'],
  '0110': ['110番の日','明太子の日'],
  '0111': ['塩の日'],
  '0112': ['スキーの日','桜島の日'],
  '0113': ['たばこの日'],
  '0114': ['タロとジロの日'],
  '0115': ['ウィキペディアの日','アダルトの日'],
  '0116': ['禁酒の日'],
  '0117': ['防災とボランティアの日','おむすびの日'],
  '0118': ['118番の日','都バス記念日','振袖火事の日'],
  '0119': ['のど自慢の日','カラオケの日'],
  '0120': ['玉の輿の日'],
  '0121': ['料理番組の日'],
  '0122': ['ジャズの日','カレーの日','飛行船の日'],
  '0123': ['電子メールの日','八甲田山の日','アーモンドの日'],
  '0124': ['郵便制度施行記念日','金の日','ゴールドラッシュデー'],
  '0125': ['日本最低気温の日','ホットケーキの日','中華まんの日','左遷の日','お詫びの日'],
  '0126': ['文化財防火デー','パーキングメーターの日'],
  '0127': ['国旗制定記念日','求婚の日'],
  '0128': ['コピーライターの日','衣類乾燥機の日','セレンディピティの日'],
  '0129': ['昭和基地開設記念日','タウン情報の日'],
  '0130': ['3分間電話の日'],
  '0131': ['生命保険の日','愛妻家の日'],
  '0201': ['テレビ放送記念日','ニオイの日'],
  '0202': ['頭痛の日'],
  '0203': ['大岡越前の日'],
  '0204': ['西の日','銀閣寺の日'],
  '0205': ['プロ野球の日'],
  '0206': ['海苔の日','抹茶の日','ブログの日'],
  '0207': ['北方領土の日'],
  '0208': ['ロカビリーの日','にわとりの日'],
  '0209': ['服の日','福の日','肉の日'],
  '0210': ['ニットの日','ふきのとうの日','観劇の日','ふとんの日','太物の日'],
  '0211': ['建国記念の日','万歳三唱の日','わんこそば記念日'],
  '0212': ['ブラジャーの日','ペニシリンの日','ボブスレーの日'],
  '0213': ['銀行強盗の日','気くばりの日'],
  '0214': ['バレンタインデー','チョコレートの日','煮干の日','姉の日'],
  '0215': ['春一番名づけの日','コマーシャルフォトの日'],
  '0216': ['天気図記念日','寒天の日'],
  '0217': ['天使のささやきの日'],
  '0218': ['エアメールの日','嫌煙運動の日','冥王星の日'],
  '0219': ['万国郵便連合加盟記念日','プロレスの日'],
  '0220': ['旅券の日','歌舞伎の日','普通選挙の日','アレルギーの日','交通事故ゼロを目指す日'],
  '0221': ['日刊新聞創刊の日','食糧管理法公布記念日','漱石の日','国際母語デー'],
  '0222': ['国際友愛の日','猫の日','食器洗い乾燥機の日','忍者の日','竹島の日'],
  '0223': ['税理士記念日','富士山の日','ふろしきの日'],
  '0224': ['クロスカントリーの日','鉄道ストの日','月光仮面登場の日'],
  '0225': ['夕刊紙の日','箱根用水完成の日'],
  '0226': ['脱出の日','咸臨丸の日','パナマ運河開通記念日','血液銀行開業記念日'],
  '0227': ['新選組の日','絆の日'],
  '0228': ['エッセイ記念日','ビスケットの日','バカヤローの日','織部の日'],
  '0229': ['ニンニクの日','跳躍の日','富士急の日','閏肉の日','キン肉マンの日'],
  '0301': ['ビキニデー','労働法施行記念日','マーチの日','行進曲の日','豚の日'],
  '0302': ['ミニチュアの日'],
  '0303': ['耳の日','民放ラジオの日','平和の日','桃の日','金魚の日','結納の日','サルサの日','サザンの日'],
  '0304': ['雑誌の日','ミシンの日','サッシの日','三線の日'],
  '0305': ['珊瑚の日','ミスコンの日','スチュワーデスの日'],
  '0306': ['エステティックサロンの日','弟の日','スポーツ新聞の日','世界一周記念日'],
  '0307': ['消防記念日','警察制度改正記念日'],
  '0308': ['国際女性デー','ミツバチの日','エスカレーターの日','みやげの日','光の日'],
  '0309': ['漁業法記念日','ありがとうの日','記念切手記念日','レコード針の日'],
  '0310': ['陸軍記念日','砂糖の日','佐渡の日','水戸の日','ミントの日','サボテンの日','農山漁村女性の日'],
  '0311': ['コラムの日','パンダ発見の日'],
  '0312': ['サイフの日','モスの日'],
  '0313': ['青函トンネル開業記念日','気くばりの日'],
  '0314': ['ホワイトデー','キャンデーの日','マシュマロデー','数学の日','国際結婚の日'],
  '0315': ['靴の記念日','オリーブの日'],
  '0316': ['国立公園指定記念日'],
  '0317': ['漫画週刊誌の日'],
  '0318': ['精霊の日'],
  '0319': ['ミュージックの日'],
  '0320': ['動物愛護デー','上野動物園開園記念日','LPレコードの日','電卓の日'],
  '0321': ['催眠術の日','ランドセルの日','世界詩歌記念日'],
  '0322': ['放送記念日','国連水の日'],
  '0323': ['世界気象デー'],
  '0324': ['世界結核デー','マネキン記念日'],
  '0325': ['電気記念日'],
  '0326': ['カチューシャの歌の日'],
  '0327': ['さくらの日'],
  '0328': ['シルクロードの日','三つ葉の日','スリーマイル島記念日'],
  '0329': ['マリモの日'],
  '0330': ['マフィアの日'],
  '0331': ['学校教育法公布記念日','エッフェル塔の日','オーケストラの日','経理の日'],
  '0401': ['エイプリルフール','児童福祉法施行記念日','売春防止法施行記念日','トレーニングの日','ストラップの日'],
  '0402': ['週刊誌の日','歯列矯正の日'],
  '0403': ['シーサーの日','いんげん豆の日'],
  '0404': ['あんぱんの日','獅子の日','トランスジェンダーの日','ピアノ調律の日','脂肪0％ヨーグルトの日'],
  '0405': ['デビューの日','ヘアカットの日','横町の日'],
  '0406': ['白の日','城の日','コンビーフの日','北極の日'],
  '0407': ['世界保健デー','スーチーパイの日'],
  '0408': ['参考書の日','忠犬ハチ公の日','ヴィーナスの日','タイヤの日','折り紙供養の日'],
  '0409': ['フォークの日','大仏の日','左官の日'],
  '0410': ['女性の日','ヨットの日','四万十の日','建具の日','良い戸の日','交通事故ゼロを目指す日'],
  '0411': ['メートル法公布記念日','ガッツポーズの日'],
  '0412': ['世界宇宙飛行の日'],
  '0413': ['決闘の日','喫茶店の日'],
  '0414': ['オレンジデー','タイタニック号の日','柔道整復の日'],
  '0415': ['ヘリコプターの日','遺言の日','ふとんの日'],
  '0416': ['女子マラソンの日'],
  '0417': ['ハローワークの日','恐竜の日'],
  '0418': ['発明の日','お香の日'],
  '0419': ['地図の日'],
  '0420': ['逓信記念日','郵政記念日','女子大の日','青年海外協力隊の日'],
  '0421': ['民放の日'],
  '0422': ['アースデー','清掃デー'],
  '0423': ['サン・ジョルディの日','子ども読書の日','世界図書・著作権デー','地ビールの日'],
  '0424': ['日本ダービー記念日','植物学の日'],
  '0425': ['ギロチンの日','歩道橋の日','拾得物の日'],
  '0426': ['世界知的所有権の日','よい風呂の日'],
  '0427': ['哲学の日','悪妻の日','婦人警官記念日'],
  '0428': ['サンフランシスコ講和記念日','象の日','シニアの日'],
  '0429': ['羊肉の日'],
  '0430': ['図書館記念日'],
  '0501': ['メーデー','日本赤十字社創立記念日','青春の日','扇の日','スズランの日','サラウンドの日','語彙の日'],
  '0502': ['郵便貯金の日','交通広告の日','エンピツ記念日','歯科医師記念日'],
  '0503': ['ゴミの日','世界報道の自由の日'],
  '0504': ['名刺の日','音楽の日','競艇の日','ラムネの日','ファミリーの日','植物園の日','ノストラダムスの日','エメラルドの日'],
  '0505': ['おもちゃの日','わかめの日','自転車の日','薬の日','ジャグラーの日　'],
  '0506': ['コロコロの日','ゴムの日'],
  '0507': ['粉の日','博士の日'],
  '0508': ['世界赤十字デー','松の日','ゴーヤーの日','御用の日'],
  '0509': ['アイスクリームの日','黒板の日','メイクの日'],
  '0510': ['コットンの日','愛鳥の日'],
  '0511': ['長良川鵜飼開きの日'],
  '0512': ['ナイチンゲールデー','看護の日','海上保安の日','アセロラの日'],
  '0513': ['メイストームデー','カクテルの日','２文字スピーチの日'],
  '0514': ['温度計の日','種痘記念日'],
  '0515': ['沖縄返還の日','ヨーグルトの日','ストッキングの日','Ｊリーグの日'],
  '0516': ['旅の日'],
  '0517': ['世界電気通信記念日','パック旅行の日','高血圧の日'],
  '0518': ['国際親善デー','国際博物館の日','ことばの日'],
  '0519': ['ボクシング記念日','チャンピオンの日'],
  '0520': ['世界計量記念日','ローマ字の日','森林の日'],
  '0521': ['小学校開校の日','リンドバーグ翼の日'],
  '0522': ['ガールスカウトの日','国際生物多様性の日'],
  '0523': ['世界亀の日','キスの日','ラブレターの日'],
  '0524': ['ゴルフ場記念日'],
  '0525': ['食堂車の日','広辞苑記念日'],
  '0526': ['ラッキーゾーンの日','ル・マンの日'],
  '0527': ['海軍記念日','百人一首の日','小松菜の日'],
  '0528': ['ゴルフ記念日','国際アムネスティ記念日'],
  '0529': ['呉服の日','こんにゃくの日'],
  '0530': ['消費者の日','ごみゼロの日','掃除機の日'],
  '0531': ['世界禁煙デー'],
  '0601': ['気象記念日','電波の日','景観の日','写真の日','麦茶の日','チューインガムの日','氷の日','真珠の日','バッジの日','ねじの日','人権擁護委員の日','TUBEの日'],
  '0602': ['路地の日','裏切りの日'],
  '0603': ['測量の日','ムーミンの日','ケロミンの日','雲仙普賢岳祈りの日'],
  '0604': ['虫の日'],
  '0605': ['環境の日','熱気球記念日'],
  '0606': ['補聴器の日','邦楽の日','楽器の日','梅の日','かえるの日','兄の日','ケロケロの日'],
  '0607': ['母親大会記念日','むち打ち治療の日'],
  '0608': ['バイキングの日'],
  '0609': ['ロックの日','ネッシーの日'],
  '0610': ['時の記念日','路面電車の日','商工会の日','歩行者天国の日','ミルクキャラメルの日'],
  '0611': ['国立銀行設立の日','雨漏り点検の日'],
  '0612': ['恋人の日','日記の日','バザー記念日','宮城県防災の日'],
  '0613': ['鉄人の日','FMの日','小さな親切の日','はやぶさの日'],
  '0614': ['フラッグデー'],
  '0615': ['信用金庫の日','暑中見舞いの日'],
  '0616': ['和菓子の日','麦とろの日','ケーブルテレビの日','無重力の日'],
  '0617': ['おまわりさんの日','薩摩の日'],
  '0618': ['海外移住の日'],
  '0619': ['元号の日','朗読の日','ベースボール記念日'],
  '0620': ['難民の日','ペパーミントデー'],
  '0621': ['スナックの日'],
  '0622': ['かにの日','ボウリングの日','沖縄アマチュア無線の日'],
  '0623': ['オリンピックデー','沖縄慰霊の日'],
  '0624': ['UFO記念日','ドレミの日'],
  '0625': ['住宅デー'],
  '0626': ['露天風呂の日','オリエンテーリングの日','国民憲章調印記念日','国際麻薬乱用撲滅デー'],
  '0627': ['演説の日','日照権の日','女性雑誌の日','ちらし寿司の日','メディア・リテラシーの日','ハピカジの日','ヘレン・ケラー・バースデー'],
  '0628': ['貿易記念日','パフェの日'],
  '0629': ['ビートルズ記念日','佃煮の日'],
  '0630': ['トランジスタの日','集団疎開の日'],
  '0701': ['国民安全の日','童謡の日','建築士の日','弁理士の日','郵便番号記念日','更生保護の日'],
  '0702': ['ユネスコ加盟記念の日','たわしの日'],
  '0703': ['ソフトクリームの日','波の日','通天閣の日'],
  '0704': ['梨の日'],
  '0705': ['ビキニスタイルの日','江戸切子の日','穴子の日'],
  '0706': ['公認会計士の日','ゼロ戦の日'],
  '0707': ['川の日','カルピスの日','冷やし中華の日','ポニーテールの日','ゆかたの日'],
  '0708': ['那覇の日','質屋の日','ナンパの日'],
  '0709': ['ジェットコースターの日'],
  '0710': ['納豆の日','ブナピーの日'],
  '0711': ['世界人口デー'],
  '0712': ['人間ドックの日'],
  '0713': ['日本標準時制定記念日','オカルト記念日','ナイスの日','2文字スピーチの日'],
  '0714': ['検疫記念日','求人広告の日'],
  '0715': ['ファミコンの日'],
  '0716': ['駅弁記念日','国土交通Day'],
  '0717': ['東京の日'],
  '0718': ['光化学スモッグの日'],
  '0719': ['女性大臣の日'],
  '0720': ['勤労青少年の日','ハンバーガーの日','Tシャツの日','修学旅行の日'],
  '0721': ['自然公園の日'],
  '0722': ['円周率近似値の日','げたの日','ナッツの日'],
  '0723': ['米騒動の日'],
  '0724': ['劇画の日'],
  '0725': ['最高気温記念日','うま味調味料の日','かき氷の日'],
  '0726': ['幽霊の日'],
  '0727': ['スイカの日'],
  '0728': ['菜っ葉の日','なにわの日','冷蔵庫記念日','地名の日'],
  '0729': ['アマチュア無線の日','白だしの日'],
  '0730': ['梅干の日'],
  '0731': ['蓄音機の日','こだまの日','パラグライダー記念日'],
  '0801': ['水の日','観光の日','肺の日','夏の省エネ総点検の日','パインの日','麻雀の日'],
  '0802': ['パンツの日','ハーブの日','博多人形の日','ハラスメントフリーの日'],
  '0803': ['ビーチサンダルの日','はちみつの日','はさみの日',''],
  '0804': ['橋の日','箸の日'],
  '0805': ['箱の日','タクシーの日','ハードコアの日'],
  '0806': ['広島原爆忌','ハムの日'],
  '0807': ['鼻の日','花の日','バナナの日'],
  '0808': ['そろばんの日','ヒゲの日','ひょうたんの日','屋根の日','プチプチの日','葉っぱの日'],
  '0809': ['長崎原爆忌','野球の日','薬草の日','はり・きゅう・マッサージの日','ハグの日','パークの日','パソコン救急の日','パソコン検定の日'],
  '0810': ['道の日','宿の日','帽子の日'],
  '0811': ['スポーツ中継の日'],
  '0812': ['国際青少年デー','君が代記念日'],
  '0813': ['函館夜景の日','深読みの日'],
  '0814': ['特許の日'],
  '0815': ['終戦の日'],
  '0816': ['女子大生の日'],
  '0817': ['パイナップルの日','プロ野球ナイター記念日'],
  '0818': ['高校野球記念日'],
  '0819': ['バイクの日','俳句の日'],
  '0820': ['蚊の日'],
  '0821': ['噴水の日','献血記念日'],
  '0822': ['チンチン電車の日'],
  '0823': ['白虎隊の日'],
  '0824': ['大噴火の日'],
  '0825': ['即席ラーメン記念日'],
  '0826': ['マザーテレサの日','レインボーブリッジの日','ユースホステルの日'],
  '0827': ['寅さんの日'],
  '0828': ['キャラディネートの日','バイオリンの日'],
  '0829': ['焼き肉の日','ケーブルカーの日'],
  '0830': ['冒険家の日'],
  '0831': ['野菜の日','大正天皇の誕生日'],
  '0901': ['防災の日','キウイの日'],
  '0902': ['宝くじの日','牛乳の日'],
  '0903': ['ベッドの日','ホームラン記念日','草野球の日'],
  '0904': ['くしの日','クラシック音楽の日'],
  '0905': ['石炭の日','国民栄誉賞の日'],
  '0906': ['黒の日','黒豆の日','妹の日'],
  '0907': ['クリーナーの日','CMソングの日'],
  '0908': ['ニューヨークの日','国際識字デー','クレバの日'],
  '0909': ['救急の日','温泉の日','チョロQの日','九九の日'],
  '0910': ['全国下水道促進デー','下水道の日','屋外広告の日','クレジットカードの日','世界自殺予防デー'],
  '0911': ['警察相談の日','公衆電話の日'],
  '0912': ['宇宙の日'],
  '0913': ['世界法の日','司法保護記念日'],
  '0914': ['メンズバレンタインデー'],
  '0915': ['老人の日','ひじきの日'],
  '0916': ['競馬の日'],
  '0917': ['モノレール開業記念日'],
  '0918': ['かいわれ大根の日','しまくとぅばの日'],
  '0919': ['苗字の日'],
  '0920': ['空の日','バスの日','お手玉の日'],
  '0921': ['ファッションショーの日'],
  '0922': ['孤児院の日'],
  '0923': ['不動産の日','万年筆の日'],
  '0924': ['清掃の日'],
  '0925': ['10円カレーの日'],
  '0926': ['ワープロの日'],
  '0927': ['世界観光の日'],
  '0928': ['パソコン記念日'],
  '0929': ['クリーニングの日','招き猫の日','接着の日'],
  '0930': ['くるみの日','クレーンの日'],
  '1001': ['法の日','コーヒーの日','印章の日','日本酒の日','メガネの日','香水の日','デザインの日','福祉用具の日','浄化槽の日','国際音楽の日'],
  '1002': ['豆腐の日','望遠鏡の日'],
  '1003': ['登山の日'],
  '1004': ['世界動物の日','天使の日','陶器の日','里親デー','都市景観の日','探し物の日','証券投資の日'],
  '1005': ['時刻表記念日','レモンの日','折り紙供養の日','音楽芸術の日'],
  '1006': ['国際協力の日'],
  '1007': ['ミステリー記念日'],
  '1008': ['木の日','入れ歯の日','足袋の日','レーザーディスクの日','骨と関節の日'],
  '1009': ['世界郵便デー','万国郵便連合記念日','トラックの日','塾の日','道具の日'],
  '1010': ['目の愛護デー','釣りの日','まぐろの日','缶詰の日','冷凍めんの日','銭湯の日','トレーナーの日','totoの日','JUJUの日'],
  '1011': ['鉄道安全確認の日','ウィンクの日'],
  '1012': ['石油機器点検の日'],
  '1013': ['サツマイモの日','引越しの日','麻酔の日'],
  '1014': ['鉄道の日','国際標準化デー'],
  '1015': ['たすけあいの日','きのこの日','ぞうりの日'],
  '1016': ['ボスの日','世界食糧デー'],
  '1017': ['貯蓄の日','上水道の日','沖縄そばの日','カラオケ文化の日'],
  '1018': ['木造住宅の日','統計の日','冷凍食品の日','ミニスカートの日','フラフープ記念日'],
  '1019': ['バーゲンの日','海外旅行の日','相続税を考える日'],
  '1020': ['リサイクルの日','新聞広告の日','頭髪の日'],
  '1021': ['国際反戦デー','あかりの日'],
  '1022': ['方言の日','パラシュートの日','絹婚記念日','平安遷都の日'],
  '1023': ['電信電話記念日','津軽弁の日'],
  '1024': ['国連デー','ツーバイフォー住宅の日','文鳥の日'],
  '1025': ['リクエストの日','民間航空記念日'],
  '1026': ['原子力の日','サーカスの日'],
  '1027': ['読書の日','世界新記録の日','テディベアズ・デー'],
  '1028': ['速記記念日'],
  '1029': ['ホームビデオ記念日'],
  '1030': ['初恋の日'],
  '1031': ['日本茶の日','ガス記念日','世界勤倹デー','陶彩の日'],
  '1101': ['犬の日','紅茶の日','玄米茶の日','泡盛の日','すしの日','カーペットの日','灯台記念日','計量記念日','点字記念日','自衛隊記念日','古典の日'],
  '1102': ['阪神タイガース記念日','タイツの日'],
  '1103': ['文具の日','レコードの日','ハンカチーフの日','ゴジラの日','いいお産の日','いいレザーの日'],
  '1104': ['ユネスコ憲章記念日','消費者センター開設記念日'],
  '1105': ['電報の日','雑誌広告の日'],
  '1106': ['お見合い記念日','アパート記念日'],
  '1107': ['鍋の日','知恵の日','国有財産の日'],
  '1108': ['レントゲンの日','刃物の日','ボイラーデー','世界都市計画の日','いい歯の日'],
  '1109': ['119番の日','換気の日','太陽暦採用記念日','歯ぐきの日'],
  '1110': ['エレベーターの日','ハンドクリームの日','技能の日'],
  '1111': ['世界平和記念日','ジュエリーデー','サッカーの日','くつしたの日','電池の日','配線器具の日','煙突の日','下駄の日','おりがみの日','鮭の日','チーズの日','もやしの日','ピーナッツの日','きりたんぽの日','ポッキー&プリッツの日','介護の日','鏡の日','ネイルの日'],
  '1112': ['皮膚の日'],
  '1113': ['うるしの日','あいさつの日'],
  '1114': ['パチンコの日','医師に感謝する日'],
  '1115': ['きものの日','かまぼこの日','こんぶの日','いい遺言の日'],
  '1116': ['幼稚園記念日'],
  '1117': ['将棋の日','蓮根の日','ドラフト記念日'],
  '1118': ['SKBケースの日','土木の日','音楽著作権の日'],
  '1119': ['緑のおばさんの日','農協記念日'],
  '1120': ['毛皮の日','ホテルの日','ピザの日'],
  '1121': ['インターネット記念日','フライドチキンの日'],
  '1122': ['THANKS PETS DAY','いい夫婦の日','ボタンの日','回転寿司記念日','大工さんの日'],
  '1123': ['Jリーグの日','ゲームの日','カキの日','外食の日','手袋の日','ワーク・ライフ・バランスの日'],
  '1124': ['オペラ記念日','鰹節の日'],
  '1125': ['OLの日'],
  '1126': ['ペンの日'],
  '1127': ['ノーベル賞制定記念日','いい鮒の日'],
  '1128': ['税関記念日','太平洋記念日'],
  '1129': ['議会開設記念日','いい服の日'],
  '1130': ['カメラの日','鏡の日'],
  '1201': ['映画の日','鉄の日','カイロの日','世界エイズデー'],
  '1202': ['原子炉の日','安全カミソリの日'],
  '1203': ['国際障害者デー','カレンダーの日','奇術の日','妻の日','コードレス電話の日','個人タクシーの日','ひっつみの日'],
  '1204': ['E.T.の日'],
  '1205': ['バミューダトライアングルの日'],
  '1206': ['姉の日','音の日'],
  '1207': ['クリスマスツリーの日'],
  '1208': ['太平洋戦争開戦記念日'],
  '1209': ['障害者の日'],
  '1210': ['世界人権デー','ごめんねの日'],
  '1211': ['タンゴの日','胃腸の日'],
  '1212': ['バッテリーの日','漢字の日'],
  '1213': ['双子の日','ビタミンの日'],
  '1214': ['四十七士討ち入りの日','麺の日'],
  '1215': ['観光バス記念日'],
  '1216': ['電話の日','紙の記念日'],
  '1217': ['飛行機の日'],
  '1218': ['東京駅の日'],
  '1219': ['日本初飛行の日'],
  '1220': ['シーラカンスの日','霧笛記念日'],
  '1221': ['遠距離恋愛の日','バスケットボールの日'],
  '1222': ['労働組合法制定記念日'],
  '1223': ['テレホンカードの日'],
  '1224': ['学校給食記念日'],
  '1225': ['スケートの日'],
  '1226': ['プロ野球誕生の日','雪印の日','ボクシング・デー'],
  '1227': ['ピーターパンの日','浅草仲見世記念日'],
  '1228': ['ディスクジョッキーの日','身体検査の日','シネマトグラフの日'],
  '1229': ['シャンソンの日','清水トンネル貫通記念日'],
  '1230': ['地下鉄記念日'],
  '1231': ['シンデレラデー']
};
