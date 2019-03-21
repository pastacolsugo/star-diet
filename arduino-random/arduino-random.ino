int peso = 1;
unsigned long long t1;

void setup () {
	Serial.begin(115200);	
	t1 = millis();
}

void loop () {
	if (millis() - t1 >= 1000) {
		Serial.println(peso++);
		peso %= 100;
		t1 = millis();
	}	
}