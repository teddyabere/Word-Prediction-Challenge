let cities= [
  "አዲስ አበባ",
  "ጎንደር",
  "መቀሌ",
  "አዳማ",
  "አዋሳ",
  "ባህር ዳር",
  "ድሬዳዋ",
  "ደሴ",
  "ጅማ ",
  "ጅጅጋ",
  "ሻሸመኔ",
  "ወላይታ ሶዶ", 
  "ደብረጽዮን",
  "ቢሾፍቱ",
  "አርባምንጭ",         
  "ሆሳዕና" ,      
  "ሀረር" ,
  "ዲላ",
  "ነቀምቴ", 
  "ደብረ ብርሃን",     
  "ደብረ ማርቆስ",     
  "አሰላ",
  "ኮምቦልቻ", 
  "ደብረ ታቦር",    
  "አዲግራት", 
  "አርሲ ነገሌ",    
  "ወልድያ",
  "ሰበታ",
  "ቡራዩ",
  "ሽሬ", 
  "አምቦ",
  "ጋምቤላ",
  "አክሱም", 
  "ሚዛን ተፈሪ",     
  "ባሌ ሮቤ", 
  "ቡታጅራ",
  "ዝዋይ",
  "አረካ",
  "ይርጋ አለም",    
  "ሞጆ",
  "ወልቂጤ",
  "ወሊሶ",
  "መኪ",
  "ጎዴ",
  "ቆቦ",
  "አላባ ቁሊቶ",     
  "ነገሌ ቦረና",     
  "አሳይታ", 
  "ቤዴሳ",
  "መር አዊ", 
  "ባቲ",
  "ባቢሌ", 
  "ቼንቻ",
  "ሽራሮ",
  "ጊዶሌ",
  "ኮረም",
  "ዳባት",
  "ሸዋ ሮቢት",  
  "ቲስ አባይ", 
  "ላሊበላ",
  "አቢ አዲ",
  "ለኩ",
  "ኢቴያ",
  "ይቤሎ",
  "ቢቸና",
  "አዲስ ዘመን",    
  "መርሳ",
  "ዌለንቺቲ",
  "ኮፈሌ",
  "አዋሽ",
  "ዱብቲ",
  "ሻምቡ",
  "አይከል",
  "ቱሉ ቦሎ", 
  "ሎጊያ",
  "ወንጂ",
  "ሜንዲ",
  "ጉደር",
  "ደርወርናቼ",  
  "ጉቲን",
  "መካነ ኢየሱ",     
  "አቦምሳ",
  "ሁሩታ",
  "ጉራቻ ጀልዱ",    
  "ሃርቲሼክ",   
  "ቶግ ዋጃሌ",   
  "መሆኒ",
  "ሶኮሩ",
  "ሚኤሶ",
  "ኮንሶ",
  "ወረ ኢሉ",
  "ሰንዳፋ",
  "ግንቦት ካደ",     
  "ሂርና",
  "አዲ አርቃይ",          
  "አዲስ አለም",     
  "አዉበረ",
  "ኢሚ",
  "ደብረ ሲና ",
  "ደጀን",
  "ጎሬ",
  "ደብረ ወርቅ",        
  "ጌዋና", 
  "ዌርደር", 
  "ሲሬ",    
  "ዱከም",
  "ሴካ ቸኮርሳ",    
  "ሜጋ",
  "አንኮበር",  
  "ሸኽ ሁሴን ",   
  "አማኑኤል",    
  "ላንጋኖ",
  "ኤርታ አለ",
  "Addis Ababa", 
  "Gondar",
  "Mekele",
  "Adama",
  "Awasa",
  "Bahir Dar",
  "Dire Dawa", 
  "Desie",
  "Jimma",
  "Shashemene",
  "Wolayta sodo",
  "Debre Zeit", 
  "Arba Minch", 
  "Hosaina",
  "Hares",
  "Nekemte",
  "Debre Birhan",
  "Debre Markos",
  "Assela",
  "Kombolcha",
  "Debre Tabor", 
  "Arsi Negele", 
  "Weldia",
  "Sebet",
  "Burayu",
  "Shire",
  "Ambo",
  "Gambela",
  "Aksum",
  "Axum",
  "Bale Robe",
  "Butajir",
  "Ziway",
  "Yirga",
  "Mojo",
  "Welkite",
  "Wolis",
  "Kobo",
  "Alaba Kito",
  "Negele borena",
  "Alamata",
  "Adwa",
  "Asebe Tferi",
  "Teppi",
  "Tepi",
  "Assosa",
  "Durame",
  "Metema",
  "Hagere maryam",
  "Goba",
  "Boditi",
  "Dolo",
  "Wikro",
  "Wukro",
  "Hadero",
  "Azezo",
  "Gimbi",
  "Wondo Genet", 
  "Sawla",
  "Wendo",
  "Metu",
  "Dembi Dolo",
  "Bure",
  "Finote selam",
  "Moyale",
  "Fiche",
  "Bonga",
  "Jinka",
  "Asayita",
  "Bedesa",
  "Mer Awi",
  "Bati",
  "Babile",
  "Chencha",
  "Shiraro",
  "Gidole",
  "Korem",
  "Dabat",
  "Shewa Robit", 
  "Tis Abay",
  "Lalibel",
  "Abiy Ad",
  "Leku",
  "Iteya",
  "Yebelo",
  "Bichena",
  "Addis Zemen", 
  "Mersa",
  "Welenchi",
  "Kofele",
  "Awash",
  "Dubti",
  "Shambu",
  "Ayikel",
  "Tulu Bolo",
  "Logia",
  "Wonji",
  "Mendi",
  "Guder",
  "Gutin",
  "Mekane yesus",
  "Abomsa",
  "Huruta",
  "Guracha",
  "Hartishk", 
  "Tog Waje",
  "Mehoni",
  "Sokoru",
  "Mieso",
  "Konso",
  "Were Ilu",
  "Sendafa",
  "May Cadara",
  "Hirna",
  "Addi Ary",
  "Ginde Bet", 
  "Addis Am",
  "Awubere",
  "Imi",
  "Debre Selam",
  "Dejen",
  "Gore",
  "Debre Werk",
  "Hagere selam",
  "Gewana",
  "Werder",
  "Sire",
  "Seka Chors",
  "Mega ",
  "Shek Husein",
  "Immanuel",
  "Tinsae brhan",
  "Erta Al" 
];

module.exports= cities; 