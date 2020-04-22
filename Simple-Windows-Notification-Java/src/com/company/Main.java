package com.company;

import java.awt.*;

public class Main {

    public static void main(String[] args) throws AWTException {
	// write your code here

        //making windows 10 support System tray
        System.setProperty("java.awt.headless", "false");
        if (SystemTray.isSupported()) {
            displayTray();
        }else {
            System.err.println("System tray not supported");
        }
    }

    private static void displayTray() throws AWTException {
        //Obtain only one instance of the SystemTray object
        SystemTray tray = SystemTray.getSystemTray();
        //If the icon is a file
        Image image = Toolkit.getDefaultToolkit().createImage("icon.png");
        //Alternative (if the icon is on the classpath):
        //Image image = Toolkit.getDefaultToolkit().createImage(getClass().getResource("icon.png"));

        TrayIcon trayIcon = new TrayIcon(image, "Demo");
        //Let the system resize the image if needed
        trayIcon.setImageAutoSize(true);
        //set tooltip text for the tray icon
        trayIcon.setToolTip("System tray icon demo");
        tray.add(trayIcon);

        trayIcon.displayMessage("hello world", "notification demo", TrayIcon.MessageType.INFO);
    }
}
