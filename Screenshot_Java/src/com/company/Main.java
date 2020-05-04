package com.company;

import javax.imageio.ImageIO;
import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;

public class Main {

    public static void main(String[] args) {
	// write your code here

        try {
            //create robot from Robot class
            Robot robot = new Robot();
            //create rectangle first
//            Rectangle rectangle = new Rectangle(0, 0, 500, 500);
            //get screen full size by Toolkit
            Rectangle rectangle = new Rectangle(Toolkit.getDefaultToolkit().getScreenSize());
            //invoke rectangle
            BufferedImage screenshot = robot.createScreenCapture(rectangle);
            ImageIO.write(
                    screenshot,
                    "JPG",
//                    new File("C:\\Users\\mmacaranas\\Downloads\\screenshot_java\\src\\com\\company\\screenshotDirectory\\screenshot.jpg")
                    new File("C:\\Users\\mmacaranas\\Downloads\\screenshot_java\\src\\com\\company\\screenshotDirectory\\screenshotFullSize.jpg")
            );
        } catch (AWTException | IOException e) {
            e.printStackTrace();
        }
    }
}
