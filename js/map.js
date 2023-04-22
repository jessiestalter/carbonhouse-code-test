let chVenuePosition, charlotteCenterPosition, marker, map, popup, Popup;

/** Initializes the map and the custom popup. */
function myMap() {

    chVenuePosition = { lat: 35.1585135, lng: -80.8884074 };
    charlotteCenterPosition = { lat: 35.2270869, lng: -80.8431267 };

    map = new google.maps.Map(document.getElementById("mapDiv"), {
        center: chVenuePosition,
        zoom: 11,
    });

    class Popup extends google.maps.OverlayView {
        position;
        containerDiv;
        constructor(position, content) {
            super();
            this.position = position;
            content.classList.add("popup-bubble");
            content.style.display = "none";
            
            const bubbleAnchor = document.createElement("div");
            
            bubbleAnchor.classList.add("popup-bubble-anchor");
            bubbleAnchor.appendChild(content);

            this.containerDiv = document.createElement("div");
            this.containerDiv.classList.add("popup-container");
            this.containerDiv.appendChild(bubbleAnchor);
            
            Popup.preventMapHitsAndGesturesFrom(this.containerDiv);
        }
        
        onAdd() {
          this.getPanes().floatPane.appendChild(this.containerDiv);
        }
        
        onRemove() {
          if (this.containerDiv.parentElement) {
            this.containerDiv.parentElement.removeChild(this.containerDiv);
          }
        }
        
        draw() {
            const divPosition = this.getProjection().fromLatLngToDivPixel(
              this.position
            );
            
            const display =
              Math.abs(divPosition.x) < 4000 && Math.abs(divPosition.y) < 4000
                ? "block"
                : "none";

            if (display === "block") {
              this.containerDiv.style.left = divPosition.x + "px";
              this.containerDiv.style.top = divPosition.y + "px";
            }

            if (this.containerDiv.style.display !== display) {
              this.containerDiv.style.display = display;
            }
        }

        open() {
            content.style.display = "block";
        }

        close() {
            content.style.display = "none";
        }
    }

    popup = new Popup(
        chVenuePosition,
        document.getElementById("content")
    );
    popup.setMap(map);
    popup.onRemove();

    marker = new google.maps.Marker({
        position: chVenuePosition,
        icon: "./images/map-marker.png",
    });
    marker.addListener("mouseover", () => {
        popup.open();
    });
    marker.addListener("mouseout", () => {
        popup.close();
    });
    marker.setMap(map);
}

window.myMap = myMap;