function searchLore() {
    var query = "https://xivapi.com/lore?string="
    var request = document.getElementById('lore-search-input').value.replaceAll(" ", "+");
    var language = "&pretty=1&language=fr";
    var columns = "&results_per_page=999&columns=Text,Data,ID,Name,Icon,ClassJobCategory.Name";
    $.getJSON(query + request + language + columns, function(data) {
        var items = [];
        $(".lore-result-container").empty();
        $.each(data.Results, function() {
            var name = "N/A";
            var text = "";
            if (this.Data != null) {
                name = this.Data.Name_fr != null ? this.Data.Name_fr : this.Data.Name;
            }
            if (this.Text != null) text = this.Text;
            items.push("<li id='" + name + "'>" + name + " : " + text + "</li>");
        });
        $( "<ul/>", {
            "class": "result-list",
            html: items.join( "" )
        }).appendTo(".lore-result-container");
    })
}