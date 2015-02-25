// Use 2D context with Brine.js
use2D = true;

alert("true")

// Create global textured sprites
/* Sprites here are global uniform objects that are
 * not created by rooms but are instead re-referenced
 * here whenever necessary. */
 
/*** Currently, there are none by the way ***/

var button_on = new Sprite();
	button_on.width  = 150;
	button_on.height = 90;
	button_on.image  = Textures.load("./Common/Textures Demo/On.png");

var button_off = new Sprite();
	button_off.width  = 150;
	button_off.height = 90;
	button_off.image  = Textures.load("./Common/Textures Demo/Off.png");

// Create room manager
/* The Room manager is a sprite handler that 
 * maintains which room is to be drawn and when */
var room_manager = new Sprite();
	// curr_room shall point at the corresponding room sprite
	room_manager.curr_room;
	
	
// Create room object
/* A room sprite should contain the elements necessary to
 * be saved for that room's purpose, as a room sprite is
 * a collection of static methods and private variables. */
var Room_00 = new Sprite();
	Room_00.create = function() {
		var button_next = new Sprite();
			button_next.width  = 150;
			button_next.height = 90;
			button_next.x = 930;
			button_next.y = 630;
			button_next.image  = Textures.load("./Common/Textures Demo/Next.png");
		world.addChild(button_next);
		
		// Create an input manager for this room.
		/* The input manager is specific to each room
		 * and created only at the room creation time.
		 */
		var input_manager = new Sprite();
		gInput.addMouseDownListener(input_manager);
	}

var Room_01 = new Sprite();
	Room_01.create = function() {
		var button_next = new Sprite();
			button_next.width  = 150;
			button_next.height = 90;
			button_next.x = 930;
			button_next.y = 630;
			button_next.image  = Textures.load("./Common/Textures Demo/Next.png");

		var button_prev = new Sprite();
			button_prev.width  = 150;
			button_prev.height = 90;
			button_prev.x = 0;
			button_prev.y = 630;
			button_prev.image  = Textures.load("./Common/Textures Demo/Previous.png");
		world.addChild(button_next);
		world.addChild(button_prev);
	}

// Initialize Brine's world
/* These are the only necessary objects needed
   to begin the game. */
world.addChild(room_manager);
room_manager.curr_room = Room_00;
room_manager.curr_room.create();








