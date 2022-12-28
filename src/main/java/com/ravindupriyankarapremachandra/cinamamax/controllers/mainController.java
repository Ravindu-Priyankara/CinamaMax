package com.ravindupriyankarapremachandra.cinamamax.controllers;

import ch.qos.logback.core.model.Model;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class mainController {
    @GetMapping("/book")
    public ModelAndView getTicket(Model model){
        ModelAndView mav = new ModelAndView("book_seat.html");
        mav.addObject("MovieName","avatar2"); // you need to get that from session
        return mav;
    }
}
