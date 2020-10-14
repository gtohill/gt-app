from selenium import webdriver
from selenium.webdriver.firefox.firefox_binary import FirefoxBinary

binary = FirefoxBinary('/usr/bin/geckodriver')
browser = webdriver.Firefox(firefox_binary=binary)