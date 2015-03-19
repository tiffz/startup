var bgRoot = "img/bg/";
var femaleRoot = "img/team/f/";
var maleRoot = "img/team/m/";
var femaleRootBig = "img/team/f/big/";
var maleRootBig = "img/team/m/big";


var diagonals = ["1.png", "2.png", "3.png", "4.png", "5.png"];

var backgrounds = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", 
										"6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg",
										"11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg", 
										"16.jpg", "17.jpg", "18.jpg", "19.jpg", "20.jpg",
										"21.jpg", "22.jpg", "23.jpg", "24.jpg", "25.jpg", 
										"26.jpg", "27.jpg", "28.jpg", "29.jpg", "30.jpg",
										"31.jpg", "32.jpg", "33.jpg", "34.jpg", "35.jpg", 
										"36.jpg", "37.jpg", "38.jpg", "39.jpg", "40.jpg",
										"41.jpg", "42.jpg", "43.jpg", "44.jpg", "45.jpg", 
										"46.jpg", "47.jpg", "48.jpg", "49.jpg", "50.jpg",
										"51.jpg", "52.jpg", "53.jpg", "54.jpg", "55.jpg", 
										"56.jpg", "57.jpg", "58.jpg", "59.jpg", "60.jpg",
										"61.jpg", "62.jpg", "63.jpg", "64.jpg", "65.jpg", 
										"66.jpg", "67.jpg", "68.jpg", "69.jpg", "70.jpg",
										"71.jpg", "72.jpg", "73.jpg", "74.jpg", "75.jpg", 
										"76.jpg", "77.jpg", "78.jpg", "79.jpg", "80.jpg",
										"81.jpg", "82.jpg", "83.jpg", "84.jpg", "85.jpg", 
										"86.jpg", "87.jpg", "88.jpg", "89.jpg", "90.jpg",
										"91.jpg", "92.jpg", "93.jpg", "94.jpg", "95.jpg", 
										"96.jpg", "97.jpg", "98.jpg", "99.jpg", "100.jpg",
										"101.jpg", "102.jpg", "103.jpg", "104.jpg", "105.jpg", 
										"106.jpg", "107.jpg", "108.jpg", "109.jpg", "110.jpg",
										"111.jpg", "112.jpg", "113.jpg", "114.jpg", "115.jpg"];

var females = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", 
										"6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg",
										"11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg", 
										"16.jpg", "17.jpg", "18.jpg", "19.jpg", "20.jpg",
										"21.jpg", "22.jpg", "23.jpg", "24.jpg", "25.jpg", 
										"26.jpg", "27.jpg", "28.jpg", "29.jpg", "30.jpg",
										"31.jpg", "32.jpg", "33.jpg", "34.jpg", "35.jpg",
										"36.jpg", "37.jpg", "38.jpg"];

var males = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", 
										"6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg",
										"11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg", 
										"16.jpg", "17.jpg", "18.jpg", "19.jpg", "20.jpg",
										"21.jpg", "22.jpg", "23.jpg", "24.jpg", "25.jpg", 
										"26.jpg", "27.jpg", "28.jpg", "29.jpg", "30.jpg",
										"31.jpg", "32.jpg", "33.jpg", "34.jpg", "35.jpg"];
										
var mainColors = ["#1abc9c", "#16a085", "#f1c40f", "#f39c12", "#2ecc71", 
									"#27ae60", "#e67e22", "#d35400", "#3498db", "#2980b9", 
									"#e74c3c", "#c0392b", "#9b59b6", "#0153B6", "#844ED7",
									"#FBA30C", "#09B729", "#CF5BA8", "#DB1B13", "#37C0EF", 
									"#AB5B98", "#330DAB", "#1DCB23", "#3C9AF6", "#2CDCEC",
									"#1CE225"];

var fontAwesome = ["fa-adn", "fa-anchor", "fa-ambulance", "fa-archive", "fa-area-chart", 
										"fa-asterisk", "fa-automobile", "fa-bank", "fa-bell", "fa-bicycle", 
										"fa-birthday-cake", "fa-bomb", "fa-bookmark", "fa-book", "fa-briefcase", 
										"fa-bug", "fa-building", "fa-bullseye", "fa-bus", "fa-camera", "fa-certificate", 
										"fa-chain", "fa-check-circle", "fa-check-circle-o", "fa-check-square", 
										"fa-check-square-o", "fa-child", "fa-cloud", "fa-clock-o", "fa-cloud-download", 
										"fa-cloud-upload", "fa-coffee", "fa-comment", "fa-comments", "fa-compass", 
										"fa-cog", "fa-cogs", "fa-crosshairs", "fa-dot-circle-o", "fa-envelope", "fa-eraser",
										"fa-exchange", "fa-exclamation-circle", "fa-female", "fa-fighter-jet", "fa-filter",
										"fa-fire", "fa-flag", "fa-flag-checkered", "fa-flag-o", "fa-flash", "fa-flask", 
										"fa-folder", "fa-forward", "fa-gavel", "fa-gift", "fa-globe", "fa-gittip", 
										"fa-graduation-cap", "fa-group", "fa-headphones", "fa-heartbeat", "fa-home", 
										"fa-inbox", "fa-key", "fa-leaf", "fa-life-ring", "fa-location-arrow", "fa-magnet", 
										"fa-music", "fa-pagelines", "fa-neuter", "fa-paint-brush", "fa-paper-plane", 
										"fa-paper-plane-o", "fa-paw", "fa-pause", "fa-pie-chart", "fa-phone-square", 
										"fa-plug", "fa-plus-square", "fa-plus-circle", "fa-power-off", "fa-puzzle-piece",
										"fa-ra", "fa-renren", "fa-road", "fa-retweet", "fa-rocket", "fa-spoon", "fa-space-shuttle", 
										"fa-street-view", "fa-sun-o", "fa-tachometer", "fa-tag", "fa-tags", "fa-th", "fa-th-large", 
										"fa-thumb-tack", "fa-ticket", "fa-times-circle", "fa-times-circle-o", "fa-tint", 
										"fa-tree", "fa-trophy", "fa-truck", "fa-umbrella", "fa-unsorted", "fa-wrench"];

var glyphicons = ["glyphicon-asterisk", "glyphicon-cloud", "glyphicon-plus", "glyphicon-music",
										"glyphicon-cog", "glyphicon-time", "glyphicon-check", "glyphicon-share", 
										"glyphicon-move", "glyphicon-tint", "glyphicon-adjust", "glyphicon-minus-sign",
										"glyphicon-screenshot", "glyphicon-exclamation-sign", "glyphicon-gift", 
										"glyphicon-leaf", "glyphicon-fire", "glyphicon-eye-open", "glyphicon-plane",
										"glyphicon-comment", "glyphicon-bell", "glyphicon-certificate", "glyphicon-dashboard",
										"glyphicon-filter", "glyphicon-pushpin", "glyphicon-phone", "glyphicon-link", 
										"glyphicon-collapse-down", "glyphicon-collapse-up", "glyphicon-record", 
										"glyphicon-flash", "glyphicon-send", "glyphicon-transfer", "glyphicon-stats", 
										"glyphicon-tower", "glyphicon-cloud-upload", "glyphicon-tree-conifer", 
										"glyphicon-tree-deciduous", "glyphicon-cd", "glyphicon-equalizer", 
										"glyphicon-king", "glyphicon-queen", "glyphicon-pawn", "glyphicon-bishop", 
										"glyphicon-knight", "glyphicon-baby-formula", "glyphicon-tent", 
										"glyphicon-apple", "glyphicon-hourglass", "glyphicon-lamp", "glyphicon-scissors", 
										"glyphicon-scale", "glyphicon-ice-lolly", "glyphicon-ice-lolly-tasted",
										"glyphicon-education", "glyphicon-modal-window", "glyphicon-grain", "glyphicon-sunglasses"];

var verbs = ["accept", "add", "admire", "admit", "advise", "afford", "agree", 
							"alert", "allow", "amuse", "analyze", "announce", "annoy", "answer", 
							"apologise", "appear", "applaud", "appreciate", "approve", "argue", 
							"arrange", "arrest", "arrive", "ask", "attach", "attack", "attempt", 
							"attend", "attract", "avoid", "back", "bake", "balance", "ban", "bang", 
							"bare", "bat", "bathe", "battle", "beam", "beg", "behave", "belong", 
							"bleach", "bless", "blind", "blink", "blot", "blush", "boast", "boil", 
							"bolt", "bomb", "book", "bore", "borrow", "bounce", "bow", "box", "brake", 
							"branch", "breathe", "bruise", "brush", "bubble", "bump", "burn", "bury", 
							"buzz", "calculate", "call", "camp", "care", "carry", "carve", "cause", 
							"challenge", "change", "charge", "chase", "cheat", "check", "cheer", "chew", 
							"choke", "chop", "claim", "clap", "clean", "clear", "clip", "close", "coach", 
							"coil", "collect", "colour", "comb", "command", "communicate", "compare", 
							"compete", "complain", "complete", "concentrate", "concern", "confess", 
							"confuse", "connect", "consider", "consist", "contain", "continue", "copy", 
							"correct", "cough", "count", "cover", "crack", "crash", "crawl", "cross", 
							"crush", "cry", "cure", "curl", "curve", "cycle", "dam", "damage", "dance", 
							"dare", "decay", "deceive", "decide", "decorate", "delay", "delight", "deliver", 
							"depend", "describe", "desert", "deserve", "destroy", "detect", "develop", 
							"disagree", "disappear", "disapprove", "disarm", "discover", "dislike", "divide", 
							"double", "doubt", "drag", "drain", "dream", "dress", "drip", "drop", "drown", 
							"drum", "dry", "dust", "earn", "educate", "embarrass", "employ", "empty", 
							"encourage", "end", "enjoy", "enter", "entertain", "escape", "examine", "excite", 
							"excuse", "exercise", "exist", "expand", "expect", "explain", "explode", "extend", 
							"face", "fade", "fail", "fancy", "fasten", "fax", "fear", "fence", "fetch", "file", 
							"fill", "film", "fire", "fit", "fix", "flap", "flash", "float", "flood", "flow", 
							"flower", "fold", "follow", "fool", "force", "form", "found", "frame", "frighten", 
							"fry", "gather", "gaze", "glow", "glue", "grab", "grate", "grease", "greet", 
							"grin", "grip", "groan", "guarantee", "guard", "guess", "guide", "hammer", "hand", 
							"handle", "hang", "happen", "harass", "harm", "hate", "haunt", "head", "heal", 
							"heap", "heat", "help", "hook", "hop", "hope", "hover", "hug", "hum", "hunt", 
							"hurry", "identify", "ignore", "imagine", "impress", "improve", "include", 
							"increase", "influence", "inform", "inject", "injure", "instruct", "intend", 
							"interest", "interfere", "interrupt", "introduce", "invent", "invite", "irritate", 
							"itch", "jail", "jam", "jog", "join", "joke", "judge", "juggle", "jump", "kick", 
							"kill", "kiss", "kneel", "knit", "knock", "knot", "label", "land", "last", "laugh", 
							"launch", "learn", "level", "license", "lick", "lie", "lighten", "like", "list", 
							"listen", "live", "load", "lock", "long", "look", "love", "man", "manage", "march", 
							"mark", "marry", "match", "mate", "matter", "measure", "meddle", "melt", "memorise", 
							"mend", "mess", "up", "milk", "mine", "miss", "mix", "moan", "mourn", "move", 
							"muddle", "mug", "multiply", "murder", "nail", "name", "need", "nest", "nod", "note", 
							"notice", "number", "obey", "object", "observe", "obtain", "occur", "offend", "offer", 
							"open", "order", "overflow", "owe", "own", "pack", "paddle", "paint", "park", "part", 
							"pass", "paste", "pat", "pause", "peck", "pedal", "perform", "permit", 
							"phone", "pick", "pinch", "pine", "place", "plan", "plant", "play", "please", "plug", 
							"point", "poke", "polish", "pop", "possess", "post", "pour", "practice", 
							"pray", "preach", "precede", "prefer", "prepare", "present", "preserve", "press", 
							"pretend", "prevent", "prick", "print", "produce", "program", "promise", "protect", 
							"provide", "pull", "pump", "punch", "puncture", "punish", "push", "question", "queue", 
							"race", "radiate", "rain", "raise", "reach", "realise", "receive", "recognise", "record", 
							"reduce", "reflect", "refuse", "reign", "reject", "rejoice", "relax", "release", 
							"rely", "remain", "remember", "remind", "remove", "repair", "repeat", "replace", "reply", 
							"report", "reproduce", "request", "rescue", "retire", "return", "rhyme", "rinse", "risk", 
							"rob", "rock", "roll", "rot", "rub", "rule", "rush", "sack", "sail", "satisfy", 
							"save", "saw", "scare", "scatter", "scold", "scrape", "scratch", "scream", 
							"screw", "scribble", "scrub", "seal", "search", "separate", "serve", "settle", "shade", 
							"share", "shave", "shelter", "shock", "shop", "shrug", "sigh", "sign", "signal", 
							"sin", "sip", "ski", "skip", "slap", "slip", "slow", "smash", "smell", "smile", "smoke", 
							"snatch", "sniff", "snore", "snow", "soak", "soothe", "sound", "spare", "spark", 
							"sparkle", "spell", "spill", "spoil", "spot", "spray", "sprout", "squash", "squeak", 
							"squeal", "squeeze", "stain", "stamp", "stare", "start", "stay", "steer", "step", "stir", 
							"stitch", "stop", "store", "strap", "strengthen", "stretch", "strip", "stroke", "stuff", 
							"subtract", "succeed", "suck", "suffer", "suggest", "suit", "supply", "support", 
							"suppose", "surprise", "surround", "suspect", "suspend", "switch", "talk", "tame", 
							"tap", "taste", "tease", "tempt", "terrify", "test", "thank", "thaw", 
							"tick", "tickle", "tie", "time", "tip", "tire", "touch", "tour", "tow", "trace", "trade", 
							"train", "transport", "trap", "travel", "treat", "tremble", "trick", "trip", "trot", 
							"trouble", "trust", "try", "tug", "tumble", "turn", "twist", "type", "undress", 
							"unfasten", "unite", "unlock", "unpack", "untidy", "use", "vanish", "visit", "wail", 
							"wait", "walk", "wander", "want", "warm", "warn", "wash", "waste", "watch", "water", 
							"wave", "weigh", "welcome", "whip", "whirl", "whisper", "whistle", "wink", 
							"wipe", "wish", "wobble", "wonder", "work", "worry", "wrap", "wreck", "wrestle", 
							"wriggle", "x-ray", "yawn", "yell", "zip", "zoom"];

var nouns = ["people", "history", "way", "art", "world", "information", "map", "two", "family", "government", "health", "system", "computer", "meat", "year", "thanks", "music", "person", "reading", "method", "data", "food", "understanding", "theory", "law", "bird", "literature", "problem", "software", "control", "knowledge", "power", "ability", "economics", "love", "internet", "television", "science", "library", "nature", "fact", "product", "idea", "temperature", "investment", "area", "society", "activity", "story", "industry", "media", "thing", "oven", "community", "definition", "safety", "quality", "development", "language", "management", "player", "variety", "video", "week", "security", "country", "exam", "movie", "organization", "equipment", "physics", "analysis", "policy", "series", "thought", "basis", "boyfriend", "direction", "strategy", "technology", "army", "camera", "freedom", "paper", "environment", "child", "instance", "month", "truth", "marketing", "university", "writing", "article", "department", "difference", "goal", "news", "audience", "fishing", "growth", "income", "marriage", "user", "combination", "failure", "meaning", "medicine", "philosophy", "teacher", "communication", "night", "chemistry", "disk", "energy", "nation", "road", "role", "soup", "advertising", "location", "success", "addition", "apartment", "education", "math", "moment", "painting", "politics", "attention", "decision", "event", "property", "shopping", "student", "wood", "competition", "distribution", "entertainment", "office", "population", "president", "unit", "category", "cigarette", "context", "introduction", "opportunity", "performance", "driver", "flight", "length", "magazine", "newspaper", "relationship", "teaching", "cell", "dealer", "finding", "lake", "member", "message", "phone", "scene", "appearance", "association", "concept", "customer", "death", "discussion", "housing", "inflation", "insurance", "mood", "woman", "advice", "blood", "effort", "expression", "importance", "opinion", "payment", "reality", "responsibility", "situation", "skill", "statement", "wealth", "application", "city", "county", "depth", "estate", "foundation", "grandmother", "heart", "perspective", "photo", "recipe", "studio", "topic", "collection", "depression", "imagination", "passion", "percentage", "resource", "setting", "ad", "agency", "college", "connection", "criticism", "debt", "description", "memory", "patience", "secretary", "solution", "aspect", "attitude", "director", "personality", "psychology", "recommendation", "response", "selection", "storage", "version", "alcohol", "argument", "complaint", "contract", "emphasis", "highway", "loss", "membership", "possession", "preparation", "steak", "union", "agreement", "cancer", "currency", "employment", "engineering", "entry", "interaction", "mixture", "preference", "region", "republic", "tradition", "virus", "actor", "classroom", "delivery", "device", "difficulty", "drama", "election", "engine", "football", "guidance", "hotel", "owner", "priority", "protection", "suggestion", "tension", "variation", "anxiety", "atmosphere", "awareness", "bath", "bread", "candidate", "climate", "comparison", "confusion", "construction", "elevator", "emotion", "employee", "employer", "guest", "height", "leadership", "mall", "manager", "operation", "recording", "sample", "transportation", "charity", "cousin", "disaster", "editor", "efficiency", "excitement", "extent", "feedback", "guitar", "homework", "leader", "mom", "outcome", "permission", "presentation", "promotion", "reflection", "refrigerator", "resolution", "revenue", "session", "singer", "tennis", "basket", "bonus", "cabinet", "childhood", "church", "clothes", "coffee", "dinner", "drawing", "hair", "hearing", "initiative", "judgment", "lab", "measurement", "mode", "mud", "orange", "poetry", "police", "possibility", "procedure", "queen", "ratio", "relation", "restaurant", "satisfaction", "sector", "signature", "significance", "song", "tooth", "town", "vehicle", "volume", "wife", "accident", "airport", "appointment", "arrival", "assumption", "baseball", "chapter", "committee", "conversation", "database", "enthusiasm", "error", "explanation", "farmer", "gate", "girl", "hall", "historian", "hospital", "injury", "instruction", "maintenance", "manufacturer", "meal", "perception", "pie", "poem", "presence", "proposal", "reception", "replacement", "revolution", "river", "son", "speech", "tea", "village", "warning", "winner", "worker", "writer", "assistance", "breath", "buyer", "chest", "chocolate", "conclusion", "contribution", "cookie", "courage", "dad", "desk", "drawer", "establishment", "examination", "garbage", "grocery", "honey", "impression", "improvement", "independence", "insect", "inspection", "inspector", "king", "ladder", "menu", "penalty", "piano", "potato", "profession", "professor", "quantity", "reaction", "requirement", "salad", "sister", "supermarket", "tongue", "weakness", "wedding", "affair", "ambition", "analyst", "apple", "assignment", "assistant", "bathroom", "bedroom", "beer", "birthday", "celebration", "championship", "client", "consequence", "departure", "diamond", "dirt", "ear", "fortune", "friendship", "funeral", "gene", "girlfriend", "hat", "indication", "intention", "lady", "midnight", "negotiation", "obligation", "passenger", "pizza", "platform", "poet", "pollution", "recognition", "reputation", "shirt", "sir", "speaker", "stranger", "surgery", "sympathy", "tale", "throat", "trainer", "uncle", "youth", "time", "work", "film", "water", "money", "example", "while", "business", "study", "game", "life", "form", "air", "day", "place", "number", "part", "field", "fish", "back", "process", "heat", "hand", "experience", "job", "book", "end", "point", "type", "home", "economy", "value", "body", "market", "guide", "interest", "state", "radio", "course", "company", "price", "size", "card", "list", "mind", "trade", "line", "care", "group", "risk", "word", "fat", "force", "key", "light", "training", "name", "school", "top", "amount", "level", "order", "practice", "research", "sense", "service", "piece", "web", "boss", "sport", "fun", "house", "page", "term", "test", "answer", "sound", "focus", "matter", "kind", "soil", "board", "oil", "picture", "access", "garden", "range", "rate", "reason", "future", "site", "demand", "exercise", "image", "case", "cause", "coast", "action", "age", "bad", "boat", "record", "result", "section", "building", "mouse", "cash", "class", "nothing", "period", "plan", "store", "tax", "side", "subject", "space", "rule", "stock", "weather", "chance", "figure", "man", "model", "source", "beginning", "earth", "program", "chicken", "design", "feature", "head", "material", "purpose", "question", "rock", "salt", "act", "birth", "car", "dog", "object", "scale", "sun", "note", "profit", "rent", "speed", "style", "war", "bank", "craft", "half", "inside", "outside", "standard", "bus", "exchange", "eye", "fire", "position", "pressure", "stress", "advantage", "benefit", "box", "frame", "issue", "step", "cycle", "face", "item", "metal", "paint", "review", "room", "screen", "structure", "view", "account", "ball", "discipline", "medium", "share", "balance", "bit", "black", "bottom", "choice", "gift", "impact", "machine", "shape", "tool", "wind", "address", "average", "career", "culture", "morning", "pot", "sign", "table", "task", "condition", "contact", "credit", "egg", "hope", "ice", "network", "north", "square", "attempt", "date", "effect", "link", "post", "star", "voice", "capital", "challenge", "friend", "self", "shot", "brush", "couple", "debate", "exit", "front", "function", "lack", "living", "plant", "plastic", "spot", "summer", "taste", "theme", "track", "wing", "brain", "button", "click", "desire", "foot", "gas", "influence", "notice", "rain", "wall", "base", "damage", "distance", "feeling", "pair", "savings", "staff", "sugar", "target", "text", "animal", "author", "budget", "discount", "file", "ground", "lesson", "minute", "officer", "phase", "reference", "register", "sky", "stage", "stick", "title", "trouble", "bowl", "bridge", "campaign", "character", "club", "edge", "evidence", "fan", "letter", "lock", "maximum", "novel", "option", "pack", "park", "plenty", "quarter", "skin", "sort", "weight", "baby", "background", "carry", "dish", "factor", "fruit", "glass", "joint", "master", "muscle", "red", "strength", "traffic", "trip", "vegetable", "appeal", "chart", "gear", "ideal", "kitchen", "land", "log", "mother", "net", "party", "principle", "relative", "sale", "season", "signal", "spirit", "street", "tree", "wave", "belt", "bench", "commission", "copy", "drop", "minimum", "path", "progress", "project", "sea", "south", "status", "stuff", "ticket", "tour", "angle", "blue", "breakfast", "confidence", "daughter", "degree", "doctor", "dot", "dream", "duty", "essay", "father", "fee", "finance", "hour", "juice", "limit", "luck", "milk", "mouth", "peace", "pipe", "seat", "stable", "storm", "substance", "team", "trick", "afternoon", "bat", "beach", "blank", "catch", "chain", "consideration", "cream", "crew", "detail", "gold", "interview", "kid", "mark", "match", "mission", "pain", "pleasure", "score", "screw", "sex", "shop", "shower", "suit", "tone", "window", "agent", "band", "block", "bone", "calendar", "cap", "coat", "contest", "corner", "court", "cup", "district", "door", "east", "finger", "garage", "guarantee", "hole", "hook", "implement", "layer", "lecture", "lie", "manner", "meeting", "nose", "parking", "partner", "profile", "respect", "rice", "routine", "schedule", "swimming", "tip", "winter", "airline", "bag", "battle", "bed", "bill", "bother", "cake", "code", "curve", "designer", "dimension", "dress", "ease", "emergency", "evening", "extension", "farm", "fight", "gap", "grade", "holiday", "horror", "horse", "host", "husband", "loan", "mistake", "mountain", "nail", "noise", "occasion", "package", "patient", "pause", "phrase", "proof", "race", "relief", "sand", "sentence", "shoulder", "smoke", "stomach", "string", "tourist", "towel", "vacation", "west", "wheel", "wine", "arm", "aside", "associate", "bet", "blow", "border", "branch", "breast", "brother", "buddy", "bunch", "chip", "coach", "cross", "document", "draft", "dust", "expert", "floor", "god", "golf", "habit", "iron", "judge", "knife", "landscape", "league", "mail", "mess", "native", "opening", "parent", "pattern", "pin", "pool", "pound", "request", "salary", "shame", "shelter", "shoe", "silver", "tackle", "tank", "trust", "assist", "bake", "bar", "bell", "bike", "blame", "boy", "brick", "chair", "closet", "clue", "collar", "comment", "conference", "devil", "diet", "fear", "fuel", "glove", "jacket", "lunch", "monitor", "mortgage", "nurse", "pace", "panic", "peak", "plane", "reward", "row", "sandwich", "shock", "spite", "spray", "surprise", "till", "transition", "weekend", "welcome", "yard", "alarm", "bend", "bicycle", "bite", "blind", "bottle", "cable", "candle", "clerk", "cloud", "concert", "counter", "flower", "grandfather", "harm", "knee", "lawyer", "leather", "load", "mirror", "neck", "pension", "plate", "purple", "ship", "skirt", "slice", "snow", "specialist", "stroke", "switch", "trash", "tune", "zone", "anger", "award", "bid", "bitter", "boot", "bug", "camp", "candy", "carpet", "cat", "champion", "channel", "clock", "comfort", "cow", "crack", "engineer", "entrance", "fault", "grass", "guy", "hell", "highlight", "incident", "island", "joke", "jury", "leg", "lip", "mate", "motor", "nerve", "passage", "pen", "pride", "priest", "prize", "promise", "resident", "resort", "ring", "roof", "rope", "sail", "scheme", "script", "sock", "station", "toe", "tower", "truck", "witness", "a", "you", "it", "can", "will", "if", "one", "many", "most", "other", "use", "make", "good", "look", "help", "go", "great", "being", "few", "might", "still", "public", "read", "keep", "start", "give", "human", "local", "general", "she", "specific", "long", "play", "feel", "high", "tonight", "put", "common", "set", "change", "simple", "past", "big", "possible", "particular", "today", "major", "personal", "current", "national", "cut", "natural", "physical", "show", "try", "check", "second", "call", "move", "pay", "let", "increase", "single", "individual", "turn", "ask", "buy", "guard", "hold", "main", "offer", "potential", "professional", "international", "travel", "cook", "alternative", "following", "special", "working", "whole", "dance", "excuse", "cold", "commercial", "low", "purchase", "deal", "primary", "worth", "fall", "necessary", "positive", "produce", "search", "present", "spend", "talk", "creative", "tell", "cost", "drive", "green", "support", "glad", "remove", "return", "run", "complex", "due", "effective", "middle", "regular", "reserve", "independent", "leave", "original", "reach", "rest", "serve", "watch", "beautiful", "charge", "active", "break", "negative", "safe", "stay", "visit", "visual", "affect", "cover", "report", "rise", "walk", "white", "beyond", "junior", "pick", "unique", "anything", "classic", "final", "lift", "mix", "private", "stop", "teach", "western", "concern", "familiar", "fly", "official", "broad", "comfortable", "gain", "maybe", "rich", "save", "stand", "young", "fail", "heavy", "hello", "lead", "listen", "valuable", "worry", "handle", "leading", "meet", "release", "sell", "finish", "normal", "press", "ride", "secret", "spread", "spring", "tough", "wait", "brown", "deep", "display", "flow", "hit", "objective", "shoot", "touch", "cancel", "chemical", "cry", "dump", "extreme", "push", "conflict", "eat", "fill", "formal", "jump", "kick", "opposite", "pass", "pitch", "remote", "total", "treat", "vast", "abuse", "beat", "burn", "deposit", "print", "raise", "sleep", "somewhere", "advance", "anywhere", "consist", "dark", "double", "draw", "equal", "fix", "hire", "internal", "join", "kill", "sensitive", "tap", "win", "attack", "claim", "constant", "drag", "drink", "guess", "minor", "pull", "raw", "soft", "solid", "wear", "weird", "wonder", "annual", "count", "dead", "doubt", "feed", "forever", "impress", "nobody", "repeat", "round", "sing", "slide", "strip", "whereas", "wish", "combine", "command", "dig", "divide", "equivalent", "hang", "hunt", "initial", "march", "mention", "smell", "spiritual", "survey", "tie", "adult", "brief", "crazy", "escape", "gather", "hate", "prior", "repair", "rough", "sad", "scratch", "sick", "strike", "employ", "external", "hurt", "illegal", "laugh", "lay", "mobile", "nasty", "ordinary", "respond", "royal", "senior", "split", "strain", "struggle", "swim", "train", "upper", "wash", "yellow", "convert", "crash", "dependent", "fold", "funny", "grab", "hide", "miss", "permit", "quote", "recover", "resolve", "roll", "sink", "slip", "spare", "suspect", "sweet", "swing", "twist", "upstairs", "usual", "abroad", "brave", "calm", "concentrate", "estimate", "grand", "male", "mine", "prompt", "quiet", "refuse", "reveal", "rush", "shake", "shift", "shine", "steal", "suck", "surround", "anybody", "bear", "brilliant", "dare", "dear", "delay", "drunk", "female", "hurry", "inevitable", "invite", "kiss", "neat", "pop", "punch", "quit", "reply", "representative", "resist", "rip", "rub", "silly", "smile", "spell", "stretch", "stupid", "tear", "temporary", "tomorrow", "wake", "wrap", "yesterday"];

var inspVerbs = ["accomplish", "achieve", "act", "adventure", "appreciate", "attain", "believe", "build", "overcome", "challenge", "commit", "concentrate", "control", "conquer", "create", "dedicate", "desire", "determine", "dream", "drive", "empower", "encourage", "endure", "enjoy", "envision", "finish", "focus", "fulfill", "work", "harmonize", "honor", "hope", "humble", "imagine", "inspire", "know", "laugh", "learn", "journey", "love", "motivate", "overcome", "persevere", "persist", "plan", "prioritize", "reach", "satisfy", "succeed", "sustain", "teach", "trust", "value", "ignite", "grow", "invest", "benefit", "perform", "strike", "give", "earn", "change", "explore", "think", "analyze", "sweat", "devote"];

var bizAdjs = ["fast", "simple", "secure", "real", "friendly", "efficient", "mobile", "responsive", "open", "safe", "different", "daring", "current", "accessible", "experienced", "driven", "responsible", "right", "easy", "focused", "targeted", "motivated", "peerless", "persistant", "trusted", "earned", "reliable", "devoted", "unstoppable", "unyielding", "able", "committed", "defined", "diverse", "connected", "selected", "tested", "agile", "flexible", "resilient", "active", "positive", "dedicated", "confident", "beautiful", "proactive", "diligent", "thorough", "prompt", "extensive", "innovative", "determined", "trustworthy", "loyal", "attentive", "dynamic", "aggressive", "consistent", "flawless", "organized", "professional", "skillful", "passionate", "alluring", "boundless", "brave", "bright", "capable", "cheerful", "coherent", "understandable", "credible", "cultured", "dashing", "dazzling", "debonair", "decisive", "delightful", "detailed", "discreet", "enchanting", "exclusive", "fair", "faithful", "fearless", "knowledgeable", "mature", "modern", "perfect", "hip", "receptive", "resolute", "righteous", "sincere", "steadfast", "tough", "unbiased", "upbeat"];

verbs = verbs.concat(inspVerbs);

var titles = ["CAO", "CBO", "CCO", "CDO", "CEO", "CFO", "CGO", "CHO", "CIO", "CJO", "CKO", "CLO", "CMO", "CNO", "COO", "CPO", "CQO", "CRO", "CSO", "CTO", "CUO", "CVO", "CWO", "CXO", "CYO", "CZO", "Chairman", "President", "Creative Director", "Executive Director", "Team Leader", "Developer", "Developer", "Developer", "Founder", "Angel Investor", "Product", "Community", "Marketing", "Marketing", "Engineering", "Engineering", "Support", "Sales", "Sales", "Sales", "Full Stack Developer", "Designer", "Design", "Frontend Developer", "Support", "Data", "Customer Success", "Customer Success Director", "Interactive Marketing Manager", "VP of Marketing Services", "Marketing Director", "Marketing Services Manager", "Solution Consulting Director", "Automation Specialist", "Office Manager", "Billing and Revenue", "Product Manager", "International Sales", "Operations", "Wholesale Fulfillment", "Fulfillment", "Warehousing", "Warehouse Supervisor", "Accounting", "Finance", "Art Director", "Creative Director", "Content", "Content", "Retail Support", "Customer Experience", "Cofounder", "Director of Software Development"];







