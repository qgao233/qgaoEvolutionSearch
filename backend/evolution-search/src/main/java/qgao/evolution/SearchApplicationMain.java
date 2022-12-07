package qgao.evolution;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SearchApplicationMain {
    public static void main(String[] args) {
        SpringApplication.run(SearchApplicationMain.class, args);
        System.out.println("----- http://localhost:8888/hello -----");
    }
}