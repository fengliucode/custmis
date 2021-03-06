package com.tapestry.app.pages.ajax;

import java.util.Date;

import org.apache.tapestry5.annotations.InjectComponent;
import org.apache.tapestry5.corelib.components.Zone;
import org.apache.tapestry5.ioc.annotations.Inject;
import org.apache.tapestry5.services.Request;

public class ZoneWithoutYellowHighlight {

	@Inject
	private Request request;
	@InjectComponent
	private Zone time2Zone;

	void onActionFromRefreshPage() {
	}

	Object onActionFromRefreshZone() {
		return request.isXHR() ? time2Zone.getBody() : null;
	}

	public Date getServerTime1() {
		return new Date();
	}

	public Date getServerTime2() {
		return new Date();
	}
}
