import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class SideBar extends Component {


    closeNav() {
        var closemyslide = document.getElementById("mySidenav");
        if (closemyslide)
            closemyslide.classList.remove('open-side');
    }

    handleSubmenu = (event) => {
        if (event.target.classList.contains('sub-arrow'))
            return;

        if(event.target.nextElementSibling.classList.contains('opensub1'))
            event.target.nextElementSibling.classList.remove('opensub1')
        else{
            document.querySelectorAll('.opensub1').forEach(function (value) {
                value.classList.remove('opensub1');
            });
            event.target.nextElementSibling.classList.add('opensub1')
        }
    }
    handleSubTwoMenu = (event) => {
        if (event.target.classList.contains('sub-arrow'))
            return;

        if(event.target.nextElementSibling.classList.contains('opensub2'))
            event.target.nextElementSibling.classList.remove('opensub2')
        else{
            document.querySelectorAll('.opensub2').forEach(function (value) {
                value.classList.remove('opensub2');
            });
            event.target.nextElementSibling.classList.add('opensub2')
        }
    }
    handleSubThreeMenu = (event) => {
        if (event.target.classList.contains('sub-arrow'))
            return;

        if(event.target.nextElementSibling.classList.contains('opensub3'))
            event.target.nextElementSibling.classList.remove('opensub3')
        else{
            document.querySelectorAll('.opensub3').forEach(function (value) {
                value.classList.remove('opensub3');
            });
            event.target.nextElementSibling.classList.add('opensub3')
        }
    }
    handleSubFourMenu = (event) => {
        if (event.target.classList.contains('sub-arrow'))
            return;

        if(event.target.nextElementSibling.classList.contains('opensub4'))
            event.target.nextElementSibling.classList.remove('opensub4')
        else{
            document.querySelectorAll('.opensub4').forEach(function (value) {
                value.classList.remove('opensub4');
            });
            event.target.nextElementSibling.classList.add('opensub4')
        }
    }

    handleMegaSubmenu = (event) => {
        if (event.target.classList.contains('sub-arrow'))
            return;

        if(event.target.nextElementSibling.classList.contains('opensidesubmenu'))
            event.target.nextElementSibling.classList.remove('opensidesubmenu')
        else{
            event.target.nextElementSibling.classList.add('opensidesubmenu')
        }
    }

    render() {
        return (
            <div id="mySidenav" className="sidenav">
                <a href="javascript:void(0)" className="sidebar-overlay" onClick={this.closeNav}></a>
                <nav>
                    <a onClick={this.closeNav}>
                        <div className="sidebar-back text-left">
                            <i className="fa fa-angle-left pr-2" aria-hidden="true"></i> Back
                        </div>
                    </a>
                    <ul id="sub-menu" className="sidebar-menu">
                        <li>
                            
                            <Link to="/collection" onClick={(e) => this.handleSubmenu(e)}>
                                arts
                                <span className="sub-arrow"></span>
                            </Link>
                            <ul>
                                <li>
                                    <Link to="/collection">metal</Link>
                                </li>
                                <li>
                                    <Link to="/collection">wood</Link>
                                </li>
                                <li>
                                    <Link to="/collection">paper</Link>
                                </li>
                                
                            </ul>
                        </li>
                        <li>
                            <Link to="/collection" onClick={(e) => this.handleSubmenu(e)}>
                                crafts
                                <span className="sub-arrow"></span>
                            </Link>
                            <ul>
                                <li>
                                    <Link to="/collection">metal</Link>
                                </li>
                                <li>
                                    <Link to="/collection">wood</Link>
                                </li>
                                <li>
                                    <Link to="/collection">wool</Link>
                                </li>
                                <li>
                                    <Link to="/collection">clay</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/collection" >sculpture</Link>
                        </li>
                        <li>
                            <Link to="/collection" >Painting</Link>
                        </li>
                        <li>
                            <Link to="/collection" >Prints</Link>
                        </li>
                        <li>
                            <Link to="/collection" >Rug</Link>
                        </li>
                        <li>
                            <Link to="/collection" >Pottery</Link>
                        </li>
                        <li>
                            <Link to="/collection" >Statue</Link>
                        </li>
                        <li>
                            <Link to="/collection" >Collectibles</Link>
                        </li>
                        <li>
                            <Link to="/collection" >jewelry</Link>
                        </li>
                    </ul>
                </nav>
            </div>

        )
    }
}


export default SideBar;